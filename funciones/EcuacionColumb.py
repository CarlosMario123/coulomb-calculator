# Importación de la función y la clase desde los respectivos archivos
from funciones.partEcu import calcularModuloVector
from funciones.ValorConstante import calcularConstCoulumb
from funciones.partEcu import restaQfByQn
from funciones.partEcu import VectorByNum
from funciones.partEcu import dividirVectorByNum
from funciones.partEcu import sumarListAnidadas

def resolverEcuacion(cargaF, cargas):
    moduloVectores = []
    valorAfuera =  calcularConstCoulumb(cargaF.carga)
    valorRestas = []
    valoresRestasX = [] #aca son los resultado de los vectores multiplicados por sus coulumbs
    
    # Calculamos el módulo por cada vector y las restas
    for carga in cargas:
        moduloVectores.append(calcularModuloVector(carga.vector))
        valorRestas.append(restaQfByQn(cargaF.vector,carga.vector))
        
        
        
   #calculamos los valores de las restas de los vectores por su coulumb
    for i in range(len(cargas)):
        valoresRestasX.append(VectorByNum(cargas[i].carga,valorRestas[i]))
  
  
    #aca se realiza la division de los vectores con su respectivo modulo
    divisionVectores = []
    for i in range(len(moduloVectores)):
        num = dividirVectorByNum(moduloVectores[i],valoresRestasX[i])
        divisionVectores.append(num)
    
    #todo dentro de la ecuacion
    vectorDentro =  sumarListAnidadas(divisionVectores) 
    print(vectorDentro)
    #regreseamos el resultado
    return VectorByNum(valorAfuera,vectorDentro)  



    



