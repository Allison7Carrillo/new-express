import express from 'express'
import {engine} from 'express-handlebars'
import { getFrase, getFrasesAnime, getFrasesAunasi } from './lib/frases.js'



const app= express()
const port= process.env.port || 3000

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')
app.set('views','./views')

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/frases', (req, res)=>{
    res.render('about',{frase:getFrase()})
})

app.get('/anime', (req, res)=>{
    res.render('about', {frase:getFrasesAnime()})
})
app.get('/aunasi', (req, res)=>{
    res.render('about', {frase:getFrasesAunasi()})
})

app.get('/headers', (req, res)=>{
    res.type('text/plain')
    const headers= Object.entries(req.headers).map(([key, value])=> `${key}: ${value}`)
    res.send(headers.join('\n'))
})

app.get('/bloques',(req,res)=>{
    let datos= {
        alumnos:[
            {ap:"Carrillo", am:"Acosta", nombre:"Allison", codigo:217747},
            {ap:"Jackson", am:"Scruce", nombre:"Michael", codigo:217746},
            {ap:"Minato", am:"Uzumaki", nombre:"Naruto", codigo:217745}
        ],

        solicitudes: [
            {codigo:123, detalle:"Quiero dar de baja una materia"}
        ]
    }
    res.render(`solicitudes`, {datos:datos})
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