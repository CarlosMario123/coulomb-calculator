def calcularModuloVector(vector):
    suma = sum(x**2 for x in vector)
    numero = suma ** (3/2)
    return numero


def restaQfByQn(vectorQf,vectorQn):

    if len(vectorQf) != len(vectorQn):#esta funcion resta vectores
        raise ValueError("Los arreglos deben tener la misma longitud")

    return [x - y for x, y in zip(vectorQf,vectorQn)]

def VectorByNum(numero, arreglo):
    resultado = [elemento * numero for elemento in arreglo]
    return resultado

def dividirVectorByNum(num,arreglo):
    resultado = list(map(lambda x: x / num, arreglo))
    return resultado

#permite sumar lista anidadas
def sumarListAnidadas(lista):
    if not lista or not all(isinstance(sublista, list) for sublista in lista):
        return "Ingrese una lista de listas"

    # Inicializamos una lista para almacenar la suma de elementos
    suma = [0] * len(lista[0])

    for sublista in lista:
        if len(sublista) != len(suma):
            return "Las sublistas no tienen la misma longitud"

        # Sumamos los elementos correspondientes de cada sublista
        suma = [suma[i] + sublista[i] for i in range(len(suma))]

    return suma
     