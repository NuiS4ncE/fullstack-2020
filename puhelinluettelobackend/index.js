const http = require('http')
const persons = [
    { 
        name: "Arto Hellas", 
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 4
    },
    {
        name: "Dan Abramov",
        numbeid: "12-43-234345",
        id: 3
    }, 
    {
        name: "Mary Poppendieck",
        numbeid: "39-23-6423122",
        id: 4
    }
]

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end(JSON.stringify(persons))
})

const port = 3001 
app.listen(port)
console.log(`Server running on port ${port}`)