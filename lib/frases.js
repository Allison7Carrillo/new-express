const frases= [
    "No hay vida que merezca la muerte -Goblin",
    "Quien quiera llevar la corona debe soportar su peso -Herederos",
    "Realmente no le puedes ganar a alguien que insiste en discutir  -Herederos",
    "Tu mejor fuente de protección no es un arma o una espada. Es tu cerebro, no lo olvides. -Vincenzo"
]

const frasesAnime=[
    "El trabajo duro es inutil para aquellos que no creen en si mismos  -Naruto Uzumaki",
    "La vida de la gente no termina cuando muere, termina cuando pierden la fe   -Itachi Uchiha",
    "No importa cuanto mientas, uno nunca puede engañar al corazon   -Meliodas",
    "Hay muchas clases de sentimientos pero es necesario convertirlos en palabras para que nos entiendan   -Tomoyo"
]

const frasesAunasi=[
    "El destino no existe. Aun asi...",
    "No soy la unica. Aun asi...",
    "Sé que no es amor. Aun asi...",
    "Sé que nada va a cambiar. Aun asi...",
    "Sé que es una mentira. Aun asi..."
]

export function getFrase(){
    return frases[idAleatorio(frases)]
}

export const getFrasesAnime= ()=>{
    return frasesAnime[idAleatorio(frasesAnime)]
}

export const getFrasesAunasi=()=>{
    return frasesAunasi[idAleatorio(frasesAunasi)]
}

let idAleatorio=(listaFrases)=>{
    const id = Math.floor(Math.random()*frases.length)

}