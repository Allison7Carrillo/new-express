const frases= [
    "No hay vida que merezca la muerte -Goblin",
    "Quien quiera llevar la corona debe soportar su peso -Herederos",
    "Realmente no le puedes ganar a alguien que insiste en discutir  -Herederos",
    "Tu mejor fuente de protección no es un arma o una espada. Es tu cerebro, no lo olvides. -Vincenzo",
    "Aquellos que permanecemos debemos vivir incluso mas intensamente, podemos llorar de vez en cuanto pero debemos de sonreir y animarnos. Estas obligado a hacerlo a cambio de todo el amor que has recibido.  -Goblin",
    "Recuerda, a veces las mentiras estan hechas para que aprendamos. Las dificultades trataran de engañarnos    -Love maze",
    "No dejes que su estatus social te intimide. Sé fuerte y actúa como si fueras su igual   -Vincenzo",
    "Me gustaria pasar el tiempo buscando a mi alma gemela, aunque no estoy seguro si algo como eso exista.  - Boys before flowers"
]

const frasesAnime=[
    "El trabajo duro es inutil para aquellos que no creen en si mismos  -Naruto Uzumaki",
    "La vida de la gente no termina cuando muere, termina cuando pierden la fe   -Itachi Uchiha",
    "No importa cuanto mientas, uno nunca puede engañar al corazon   -Meliodas",
    "Hay muchas clases de sentimientos pero es necesario convertirlos en palabras para que nos entiendan   -Tomoyo",
    "Sé selectivo en tus batallas, a veces es mejor tener paz que tener razón   -Ikki de Fenix",
    "La verdad del universo es que nada es seguro    -Shaka de Virgo",
    "La justicia es relativa, puede hacerse justicia desde el lado del mal   -Shaka de virgo",
    "Si no logras ayudarte a ti mismo, jamas ayudaras a nadie.   -Kirito"
]

const frasesAunasi=[
    "El destino no existe. Aun asi...",
    "No soy la unica. Aun asi...",
    "Sé que no es amor. Aun asi...",
    "Sé que nada va a cambiar. Aun asi...",
    "Sé que es una mentira. Aun asi...",
    "Ya comenzo. Aun asi...",
    "El amor no existe. Aun asi...",
    "Sé que no hay vuelta atras. Aun asi...",
    "Sé que se acabo. Aun asi...",
    "Aun asi, yo todavia..."
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
    const id = Math.floor(Math.random()*listaFrases.length)
    return id
}