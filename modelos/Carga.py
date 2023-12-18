from funciones.tipoCoulumb import convertValueCoulumb
from funciones.medidas import convertirVectorToMedida

class Carga:
    def __init__(self,carga,coulub,vector,medida):
        self.carga = carga * convertValueCoulumb(coulub)
        self.vector = convertirVectorToMedida(vector,medida)