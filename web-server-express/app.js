const express = require('express')
const fs = require('fs')

const app = express() // express app: create express instance

app.set('view engine', 'ejs')

app.use(express.urlencoded({extends: true}))

app.listen(3000)

console.log('__dirname:',__dirname)
console.log('__filename:',__filename)

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})


const vacancies = [
    {
        id: 1,
        position: 'Full Stack Developer',
        company: 'LSEG (London Stock Exchange Group)',
        description: 'As a Full Stack Developer, you will be co-designing, building, testing, and manage our entire web infrastructure. We are looking for someone who thinks outside the box, is passionate about innovation, and has high energy levels. You will be working within the web development team building strong relationships with the business, subject matter experts, application designers and system specialists.'
    },
    {
        id: 2,
        position: 'Senior Engineer, Site Reliability',
        company: 'LSEG (London Stock Exchange Group)',
        description: 'Act as primary point-of-contact (PoC) on all cloud infrastructure issues.'
    },
    {
        id: 3,
        position: 'Data Scientist / Senior Data Scientist',
        company: 'OCTAVE - John Keells Group',
        description: 'The Senior Data Scientists will leverage expertise in advanced statistical and modelling techniques to design, prototype, and build the next-generation analytics engines and services. They will work closely with the analytics teams and business teams to derive actionable insights, helping the organization in achieving its’ strategic goals. Their work will involve high levels of interaction with the integrated analytics team, including data engineers, translators and more senior data scientists.'
    },
    {
        id: 4,
        position: 'Talent Pool - JavaScript (Angular / React)',
        company: '99x',
        description: 'The JavaScript developer will join an amazing development and design team that’s constantly challenged working with the latest technologies, creating life-changing solutions, and having a great time doing it.'
    },
    {
        id: 5,
        position: 'QA Automation Lead',
        company: 'Virtusa',
        description: 'Hands on experience using Selenium, Cucumber, Java, ATDD, Test deployment and integration, Jenkins'
    }
]


app.get('/career', (req, res) => {
    res.render('career', {title: 'Career', vacancies: vacancies})
})

app.get('/career-2023', (req, res) => {
    res.redirect('/career')
})

app.get('/contact', (req, res) => {
    const arr = JSON.parse(fs.readFileSync('fakedb.json').toString())
    res.render('contact', {title: 'Contact', contacts: arr})
})

app.post('/contact', (req, res) => {
    console.log(req.body)
    const arr = JSON.parse(fs.readFileSync('fakedb.json').toString())
    let body = req.body
    body.id = arr.length + 1
    arr.push(body)
    fs.writeFileSync('fakedb.json', JSON.stringify(arr))
    res.redirect('/')
})

app.use((req, res) => {
    res.status(404).render('404', {title: 'Resource not found'}) // express don't know this is 404 as such we have to set status manually
})