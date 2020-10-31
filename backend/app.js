const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const knexfile = require('./knexfile')
const knex = require('knex')(knexfile.development)
const bcrypt = require('bcryptjs')
const saltRounds = 10;


// app.listen() takes in the port we want the server to listen on. So for 
// development we could do app.listen(3000)

const app = express()

app.use(cors())

app.use(bodyParser())

app.post('/user/create', async function (request, response) {

    let existingUsersWithTheSameName = await knex('users').where('name', request.body.name)

    if(existingUsersWithTheSameName.length > 0){
        response.status(425).json({ message: 'A time traveller beat you to it '})
    }

    let hash = await bcrypt.hash(request.body.password, saltRounds)
    const newUser = {
        name: request.body.name,
        email: request.body.email,
        password: hash
    }
    let [ userId ] = await knex('users').insert(newUser)
    response.json({ name: newUser.name, id: userId })
});

app.post(`/user/:name`, async (request, response) => {
    const [ user ] = await knex.select('*').from('users').where('name', request.params.name)
    const match = await bcrypt.compare(request.body.password, user.password)
    if (match) {
        response.json(user)
    }
})

app.get('/appointments', async (request, response) => {
    const appointments = await knex.select('*').from('appointments').where('id', user.id)
    response.json(appointments)
})

app.post('/appointments', async (request, response) => {
    const newAppointment = {
        time: request.body.time,
        date: request.body.date,
        description: request.body.description,
        user_id: request.body.user_id,
    }
    knex('appointments').insert(newAppointment)
    response.json(newAppointment)
})

app.listen('3000')