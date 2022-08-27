import express from 'express'
import {engine} from 'express-handlebars'



const app= express()
const port= process.env.port || 3000

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')
app.set('views','./views')

app.use(express.static('public'))

const frases= [
    "No hay vida que merezca la muerte -Goblin",
    "Quien quiera llevar la corona debe soportar su peso -Herederos",
    "Realmente no le puedes ganar a alguien que insiste en discutir  -Herederos",
    "Tu mejor fuente de protección no es un arma o una espada. Es tu cerebro, no lo olvides. -Vincenzo"
]


app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/about',(req,res)=>{
    let fraseAleatoria= frases[Math.floor(Math.random()*frases.length)]
    res.render('about', {frase:fraseAleatoria})
})


app.use((req,res)=>{
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next)=>{
    console.error(err, message) 
    res.status(500)
    res.render('500')
})

app.listen(port, ()=>{
    console.log(`Express se ha iniciado en el puerto ${port} - Press control c para terminar`)
})