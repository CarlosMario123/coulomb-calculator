from modelos.Carga import Carga
def procesarDatos(datos):
    misCargas = []
    cargas = datos["cargas"]
    cargaF = datos['cargaF']
    cargaFinal = Carga(cargaF["carga"],cargaF["coulumb"],cargaF["vector"],"m")
    #extaer las cargas
    for carga in cargas:
        objeto = Carga(carga["carga"],carga["coulumb"],carga["vector"],"m")
        misCargas.append(objeto)
    print(cargaFinal.carga)    
    return [misCargas,cargaFinal]

