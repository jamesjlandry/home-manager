const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const knexfile = require('./knexfile')
const knex = require('knex')(knexfile.development)
const bcrypt = require('bcryptjs')
const saltRounds = 10;


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
        name: request.body.name,
        description: request.body.description,
        start_time: request.body.startTime,
        end_time: request.body.endTime,
        day: request.body.day,
        week: request.body.week,
        user_id: request.body.user_id,
    }
    knex('appointments').insert(newAppointment)
    response.json(newAppointment)
})

app.patch(`/appointments/${request.params.id}`, async (request, response) => {
    const updatedAppointment = {
        name: request.body.name,
        description: request.body.description,
        start_time: request.body.startTime,
        end_time: request.body.endTime,
        day: request.body.day,
        week: request.body.week,
    }
    knex('appointments').where({id: request.params.id}).update(updatedAppointment)
    response.json(updatedAppointment)
})

app.delete(`/appointments${request.params.id}`, async (request, response) => {
    knex('appointments').where('id', request.params.id).del()
})

app.get('/errands', async (request, response) => {
    const errands = await knex.select('*').from('errands').where('id', user.id)
    response.json(errands)
})

app.post('/errands', async (request, response) => {
    const newErrand = {
        name: request.body.name,
        description: request.body.description,
        start_time: request.body.startTime,
        end_time: request.body.endTime,
        day: request.body.day,
        week: request.body.week,
        user_id: request.body.user_id,
    }
    knex('errands').insert(newErrand)
    response.json(newErrand)
})

app.get('/projects', async (request, response) => {
    const projects = await knex.select('*').from('projects').where('id', user.id)
    response.json(projects)
})

app.post('/projects', async (request, response) => {
    const newProject = {
        name: request.body.name,
        description: request.body.description,
        start_time: request.body.startTime,
        end_time: request.body.endTime,
        day: request.body.day,
        week: request.body.week,
        user_id: request.body.user_id,
    }
    knex('projects').insert(newProject)
    response.json(newProject)
})

app.get('/assignments', async (request, response) => {
    const assignments = await knex.select('*').from('assignments').where('id', user.id)
    response.json(assignments)
})

app.post('/assignments', async (request, response) => {
    const newAssignment = {
        name: request.body.name,
        description: request.body.description,
        start_time: request.body.startTime,
        end_time: request.body.endTime,
        day: request.body.day,
        week: request.body.week,
        user_id: request.body.user_id,
    }
    knex('assignments').insert(newAssignment)
    response.json(newAssignment)
})

app.get('/meals', async (request, response) => {
    const meals = await knex.select('*').from('meals').where('id', user.id)
    response.json(meals)
})

app.post('/meals', async (request, response) => {
    const newMeal = {
        name: request.body.name,
        description: request.body.description,
        start_time: request.body.startTime,
        end_time: request.body.endTime,
        day: request.body.day,
        week: request.body.week,
        user_id: request.body.user_id,
    }
    knex('meals').insert(newMeal)
    response.json(newMeal)
})

app.listen('3000')