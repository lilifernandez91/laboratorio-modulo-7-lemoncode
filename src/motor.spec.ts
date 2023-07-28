import { backImageSrc, cartas, puntos } from "./modelo";
import { calcularPuntuacion, generarCartaAleatoria, obtenerImagenSrc } from "./motor";

describe('generarCartaAleatoria', () => {
    it('deberia devolver un numero entre 0 y la longitud del array de cartas', () => {
        //Arrange (Preparar)
        const listadoDeCartasValidas = cartas;

        //Act (Actuar)
        const cartaAleatoria = generarCartaAleatoria()

        //Assert (Afirmar)
        expect(listadoDeCartasValidas).toContain(cartaAleatoria);
    })
})

describe('calcularPuntuacion', () => {
    it('deberia sumar 0.5 si el valor de la carta aleatoria es 10, 11 o 12', () => {
        //Arrange (Preparar)
        const cartaAleatoria = 10

        //Act (Actuar)
        calcularPuntuacion(cartaAleatoria)

        //Assert (Afirmar)
        expect(puntos.puntuacion).toBe(0.5)
    })
    it('deberia sumar el valor nominal de la carta aleatoria cuando no es 10, 11 o 12', () => {
        //Arrange (Preparar)
        puntos.puntuacion = 0
        const cartaAleatoria = 6

        //Act (Actuar)
        calcularPuntuacion(cartaAleatoria)

        //Assert (Afirmar)
        expect(puntos.puntuacion).toBe(6)
    })
})

describe('obtenerImagenSrc', () => {
    it('deberia devolver la imagen correcta para las cartas con valores del 1 al 7, 10,11 y 12', () => {
        //Arrange (Preparar)
        const listadoDeCartas = cartas;

        //Act (Actuar)
        listadoDeCartas.forEach((carta) => {
            const imageSrc = obtenerImagenSrc(carta)
            const srcEsperado = imageSrc.replace('{carta}', carta.toString())
            //Assert (Afirmar)
            expect(imageSrc).toBe(srcEsperado)
        })
    })
    it('deberia devolver la imagen correcta para la carta por defecto', () => {
        //Arrange (Preparar)
        const cartaPorDefecto = backImageSrc
        //Act (Actuar)
        const imageSrc = obtenerImagenSrc(0)
        //Assert (Afirmar)
        expect(imageSrc).toBe(cartaPorDefecto)
    })
})