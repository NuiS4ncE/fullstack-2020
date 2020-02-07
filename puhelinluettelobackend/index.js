const express = require('express')
const app = express()

app.use(express.json())

let persons = [
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
const date = new Date()

app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${persons.length} people <br> <br> ${date}`)
})


app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
}) 

const generateId = () => {
    const maxId = persons.length > 0 
    ? Math.max(...persons.map(n => n.id))
    : 0 
    return maxId + 1
}

app.post('/api/persons', (req, res) => {
    const body = req.body
    
    if(!body.content){
        return res.status(400).json({
            error: 'content missing'
        })
    }
    
    const person = {
        name: body.name, 
        number: body.number, 
        id: generateId()
    }

    persons = persons.concat(person)

    res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person1 => person1.id !== id)
  
    res.status(204).end()
  })

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})



/*
const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end(JSON.stringify(persons))
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`) */