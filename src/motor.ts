import {
    puntos,
    cartas,
    imageSrc,
    backImageSrc
} from './modelo'

export const generarCartaAleatoria = (): number => {
    const indiceAleatorio = Math.floor(Math.random() * cartas.length)
    return cartas[indiceAleatorio]
}

export const calcularPuntuacion = (cartaAleatoria: number): void => {
    puntos.puntuacion += cartaAleatoria === 10 || cartaAleatoria === 11 || cartaAleatoria === 12 ? 0.5 : cartaAleatoria;
};

export const obtenerImagenSrc = (carta: number): string => {
    let imagen: string

    switch (carta) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 10:
        case 11:
        case 12:
            imagen = imageSrc.replace('{carta}', carta.toString())
            break
        default:
            imagen = backImageSrc
            break
    }
    return imagen;
}

export const iniciarPartida = () => {
    puntos.puntuacion = 0
}