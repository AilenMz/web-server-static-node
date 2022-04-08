const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config()

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//servir contenido estático
app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('home',{
    nombre: "Ailen Martinez", 
    titulo: 'Curso de node'
  })
})

app.get('/generic', (req, res)=>{
  res.render('generic',{
    nombre: "Ailen Martinez", 
    titulo: 'Curso de node'
  })
})

app.get('/elements', (req, res)=>{
  res.render('elements',{
    nombre: "Ailen Martinez", 
    titulo: 'Curso de node'
  })
})

// app.get('/generic', (req, res)=>{
//   res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res)=>{
//   res.sendFile(__dirname + '/public/elements.html')
// })

app.get('*', (req, res)=>{
  res.sendFile(__dirname + '/public/back/404error.html')
})



app.listen(process.env.PORT || 8080, () =>{
    console.log(`Server corriendo en puerto ${process.env.PORT || 8080}`)
})

