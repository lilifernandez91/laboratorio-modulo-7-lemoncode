import { backImageSrc, puntos } from "./modelo";
import { calcularPuntuacion, generarCartaAleatoria, iniciarPartida, obtenerImagenSrc } from "./motor";

describe('generarCartaAleatoria', () => {
    it('deberia devolver un numero aleatorio que esté dentro del array de cartas', () => {
        //Arrange (Preparar)
        const cartas: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]

        //Act (Actuar)
        const cartaAleatoria = generarCartaAleatoria(cartas)

        //Assert (Afirmar)
        expect(cartas).toContain(cartaAleatoria)
    })
})

describe('calcularPuntuacion', () => {
    beforeEach(() => {
        puntos.puntuacion = 0
    });
    it('deberia sumar 0.5 si el valor de la carta aleatoria es 10', () => {
        //Arrange (Preparar)
        const cartaAleatoria = 10

        //Act (Actuar)
        calcularPuntuacion(cartaAleatoria)

        //Assert (Afirmar)
        expect(puntos.puntuacion).toBe(0.5)
    })
    it('deberia sumar 0.5 si el valor de la carta aleatoria es 11', () => {
        //Arrange (Preparar)
        const cartaAleatoria = 11

        //Act (Actuar)
        calcularPuntuacion(cartaAleatoria)

        //Assert (Afirmar)
        expect(puntos.puntuacion).toBe(0.5)
    })
    it('deberia sumar el valor nominal de la carta aleatoria cuando no es 10, 11 o 12', () => {
        //Arrange (Preparar)
        const cartaAleatoria = 6

        //Act (Actuar)
        calcularPuntuacion(cartaAleatoria)

        //Assert (Afirmar)
        expect(puntos.puntuacion).toBe(6)
    })
    it('deberia sumar el valor nominal de la carta aleatoria cuando no es 10, 11 o 12', () => {
        //Arrange (Preparar)
        const cartaAleatoria = 7

        //Act (Actuar)
        calcularPuntuacion(cartaAleatoria)

        //Assert (Afirmar)
        expect(puntos.puntuacion).toBe(7)
    })
})

describe('obtenerImagenSrc', () => {
    it('deberia devolver la imagen correcta para la carta con valor 1', () => {
        //Arrange (Preparar)
        const carta: number = 1

        //Act (Actuar)
        const imageSrc = obtenerImagenSrc(carta)

        //Assert (Afirmar)
        expect(imageSrc).toBe('/images/1-copas.jpg')
    })
    it('deberia devolver la imagen correcta para la carta con valor 3', () => {
        //Arrange (Preparar)
        const carta: number = 3

        //Act (Actuar)
        const imageSrc = obtenerImagenSrc(carta)

        //Assert (Afirmar)
        expect(imageSrc).toBe('/images/3-copas.jpg')
    })
    it('deberia devolver la imagen correcta para la carta con valor 12', () => {
        //Arrange (Preparar)
        const carta: number = 12

        //Act (Actuar)
        const imageSrc = obtenerImagenSrc(carta)

        //Assert (Afirmar)
        expect(imageSrc).toBe('/images/12-copas.jpg')
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

describe('iniciarPartida', () => {
    it('deberia resetear la puntuacion a 0', () => {
        //Arrange (Preparar)
        puntos.puntuacion = 10

        //Act (Actuar)
        iniciarPartida()

        //Assert (Afirmar)
        expect(puntos.puntuacion).toBe(0)
    })
})