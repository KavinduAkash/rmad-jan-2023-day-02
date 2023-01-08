const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    console.log('req: ', req.url)
    console.log('req: ', req.method)
    
    // content-type text/plain
    // res.setHeader('Content-Type', 'text/plain')
    // res.write('hello nodejs')

    // content type text/html
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<h1>Hello NodeJs!</h1>')

    // content-type text/json
    // const json = [
    //     {
    //         "id":1,
    //         "name":"Jhone"
    //     },
    //     {
    //         "id":2,
    //         "name":"White"
    //     }
    // ]

    // res.setHeader('Content-Type', 'text/json')
    // res.write(JSON.stringify(json))

    // res.setHeader('Content-Type', 'text/json')
    // fs.readFile('test.json', (err, data) => {
    //     if(err) {
    //         console.log('unable to read the file!')
    //         res.end()
    //     } else {
    //         res.write(data)
    //         res.end()
    //     }
    // })

    // send files - html
    // res.setHeader('Content-Type', 'text/html')
    // fs.readFile('index.html', (err, data) => {
    //     if(err) {
    //         console.log('unable to read the file!')
    //         res.end()
    //     } else {
    //         res.write(data)
    //         res.end()
    //     }
    // })

    // res.end()

    let pagePath = "./views"

    switch(req.url) {
        case '/':
            pagePath += '/index.html'
            break
        case '/about':
            pagePath += '/about.html'
            break
        case '/career':
            pagePath += '/career.html'
            break
        case '/career-2023':
            res.setHeader('Location', '/career')
            res.statusCode = 301
            break    
        default:
            pagePath += '/404.html'
            res.statusCode = 404
            break     
        
    }

    fs.readFile(pagePath, (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
            // res.write(data)
            res.end(data)
        }
    }) 

})

server.listen(3000, 'localhost', () => {
    console.log("I'm running on port 3000")
})