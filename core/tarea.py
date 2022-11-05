class Vehiculo():
    def __init__(self, color, ruedas):
        self.color = color
        self.ruedas = ruedas

    def __str__(self):
        return 'color = ' + self.color + '\nruedas = ' + str(self.ruedas)


# Herencia a otra clase
class Auto(Vehiculo):
    def __init__(self, color, ruedas, velocidad):
        super().__init__(color, ruedas)
        self.velocidad = velocidad

    def __str__(self):
        return super().__str__() + '\nvelocidad = ' + str(self.velocidad)



# Herencia a otra clase
class Bicicleta(Vehiculo):
    def __init__(self, color, ruedas, tipo):
        super().__init__(color, ruedas)
        self.tipo = tipo

    def __str__(self):
        return super().__str__() + '\ntipo = ' + self.tipo

# Objetos
vehiculo = Vehiculo('Rojo', 4)
auto = Auto('Rojo', 4, 120)
bici = Bicicleta('negra', 2, 'playera')
