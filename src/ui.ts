import * as confetti from 'canvas-confetti';

import {
    backImageSrc,
    puntos
} from './modelo'

import {
    generarCartaAleatoria,
    calcularPuntuacion,
    obtenerImagenSrc,
    iniciarPartida,
} from './motor'

const elementoPuntuacion = document.getElementById('puntuacion')
const elementoCarta = document.getElementById('carta')
const mensajes = document.getElementById('mensajes')
const btnPideCarta = document.getElementById('dame')
const comenzar = document.getElementById('comenzar')
const mePlanto = document.getElementById('planto')
const despuesDePlantarse = document.getElementById('despues-plantarse')

export const pideCarta = () => {
    const cartaAleatoria = generarCartaAleatoria()
    calcularPuntuacion(cartaAleatoria)
    muestraPuntuacion()
    const imageSrc = obtenerImagenSrc(cartaAleatoria)

    if (elementoCarta) {
        elementoCarta.setAttribute('src', imageSrc)
    }

    gameOver()
    if (mensajes &&
        btnPideCarta &&
        btnPideCarta instanceof HTMLButtonElement &&
        puntos.puntuacion === 7.5 &&
        mePlanto &&
        mePlanto instanceof HTMLButtonElement) {
        mensajes.textContent = '¡Lo has clavado! ¡Enhorabuena!'
        confetti.default()
        btnPideCarta.disabled = true
        btnPideCarta.classList.add('disabled-btn')
        mePlanto.classList.add('disabled-btn')
        mePlanto.disabled = true
    }
}

const muestraPuntuacion = (): void => {
    if (elementoPuntuacion) {
        elementoPuntuacion.textContent = puntos.puntuacion.toString()
    }
}

const handleMePlanto = (): void => {
    activarDesactivarButton()
    actualizarMensajes()
}

export const activarDesactivarButton = () => {
    if (btnPideCarta && btnPideCarta instanceof HTMLButtonElement && mensajes && mePlanto && despuesDePlantarse) {
        btnPideCarta.disabled = true
        btnPideCarta.classList.add('disabled-btn')
        mePlanto.classList.add('disabled-btn')
        despuesDePlantarse.classList.remove('despues-de-plantarse')
        if (puntos.puntuacion === 0) {
            mensajes.textContent = 'Por favor, pide una carta'
            btnPideCarta.disabled = false
            btnPideCarta.classList.remove('disabled-btn')
            mePlanto.classList.remove('disabled-btn')
            despuesDePlantarse.classList.add('despues-de-plantarse')
        }
    }
}

export const actualizarMensajes = () => {
    if (mensajes) {
        if (puntos.puntuacion >= 0.5 && puntos.puntuacion < 4) {
            mensajes.textContent = 'Has sido muy conservador'
        } else if (puntos.puntuacion >= 4 && puntos.puntuacion < 6) {
            mensajes.textContent = 'Te ha entrado el canguelo eh?'
        } else if (puntos.puntuacion >= 6 && puntos.puntuacion < 7.5) {
            mensajes.textContent = 'Casi casi....'
        }
    }
}

export const handleComenzar = (): void => {
    puntos.puntuacion = 0

    if (elementoPuntuacion &&
        elementoCarta &&
        btnPideCarta &&
        btnPideCarta instanceof HTMLButtonElement &&
        mensajes &&
        mePlanto instanceof HTMLButtonElement &&
        despuesDePlantarse) {
        elementoPuntuacion.textContent = puntos.puntuacion.toString()
        elementoCarta.setAttribute('src', backImageSrc)
        mensajes.textContent = ''
        btnPideCarta.disabled = false
        btnPideCarta.classList.remove('disabled-btn')
        mePlanto.classList.remove('disabled-btn')
        despuesDePlantarse.classList.add('despues-de-plantarse')
        mePlanto.disabled = false;
    }
}

export const handledespuesDePlantarse = (): void => {
    if (despuesDePlantarse && btnPideCarta && btnPideCarta instanceof HTMLButtonElement && mensajes) {
        despuesDePlantarse.classList.remove('despues-de-plantarse')
        btnPideCarta.disabled = false
        btnPideCarta.classList.remove('disabled-btn')
    }
}

export const gameOver = (): void => {
    if (puntos.puntuacion > 7.5 &&
        mensajes &&
        btnPideCarta &&
        btnPideCarta instanceof HTMLButtonElement &&
        mePlanto &&
        mePlanto instanceof HTMLButtonElement) {
        mensajes.textContent = 'GAME OVER: LO SENTIMOS, LA PUNTUACION DEBE SER IGUAL O MENOR QUE 7.5'
        btnPideCarta.disabled = true
        btnPideCarta.classList.add('disabled-btn')
        mePlanto.classList.add('disabled-btn')
        mePlanto.disabled = true
    }
}

if (mePlanto && btnPideCarta && comenzar && despuesDePlantarse) {
    mePlanto.addEventListener('click', handleMePlanto)
    btnPideCarta.addEventListener('click', pideCarta)
    comenzar.addEventListener('click', handleComenzar)
    despuesDePlantarse.addEventListener('click', handledespuesDePlantarse)
}

document.addEventListener('DOMContentLoaded', iniciarPartida)

