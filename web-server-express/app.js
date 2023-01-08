const express = require('express')

const app = express() // express app: create express instance

app.listen(3000)

console.log('__dirname:',__dirname)
console.log('__filename:',__filename)

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname})
})

app.get('/career', (req, res) => {
    res.sendFile('./views/career.html', {root: __dirname})
})

app.get('/career-2023', (req, res) => {
    res.redirect('/career')
})

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname}) // express don't know this is 404 as such we have to set status manually
})