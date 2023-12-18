from funciones.EcuacionColumb import resolverEcuacion
from modelos.Carga import Carga
from funciones.notacion import parseNotacionCientifica
from funciones.procesarDatos import procesarDatos
from flask import Flask, render_template, url_for,request,jsonify

carga1 = Carga(-4, "mc", [31,-30,31], "m")
carga2 = Carga(-8, "mc", [19,2,-3], "m")
carga3 = Carga(-16, "mc",  [1449,1521,1910], "m")
carga4 = Carga(-1, "mc",  [1400,-1920,2019], "m")

cargas = [carga1,carga2,carga3]
resultado = resolverEcuacion(carga4,cargas)
print(resultado)
print(parseNotacionCientifica(resultado))

#creamos nuestro objeto flask
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/recibir', methods=['POST'])
def recibirDatos():
    
    # Verificar si la solicitud es POST
    if request.method == 'POST':
        # Obtener los datos del cuerpo del POST (en este caso, asumimos JSON)
        data = request.json
        
        datos = procesarDatos(data)
        solucion = resolverEcuacion(datos[1],datos[0])
        solucionParse = parseNotacionCientifica(solucion)
        #enviamos el json
        return jsonify({
        'solucion': solucion,
        'solucionParse': solucionParse
        })
    else:
        return jsonify({'error': 'Solicitud no válida'})

#aca corre la app
if __name__ == '__main__':
    app.run(debug=True)