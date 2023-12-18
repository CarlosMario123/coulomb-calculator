def parseNotacionCientifica(vector):
    resultado = map(lambda x: format(x, "e"),vector)
    return list(resultado)