def convertirVectorToMedida(vector,unidad):
    conversion = {
        'm': 1,          # metros
        'cm': 0.01,        # centímetros a metros
        'mm': 0.001,       # milímetros a metros
        'in': 0.0254,      # pulgadas a metros
        'ft': 0.3048,      # pies a metros
        'mi': 1609.34      # millas a metros
    }
    #para realizar un mapeo con el valor correspondiente
    resultado = map(lambda x: x * conversion[unidad],vector)
    
    return list(resultado)#no nos olvide que despues de mapear mandamos un list para parsear