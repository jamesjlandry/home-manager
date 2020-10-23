const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//express is a function that needs to be invoked that has other methods
// app.get() for instance takes in a route and another callback function
// that takes in 2 more arguments, the request and the response which have 
// other methods built into them. such as response.send() will send the contents
// back to the browser that made the request. The format needs to be in JSON format
// app.listen() takes in the port we want the server to listen on. So for 
// development we could do app.listen(3000)

const app = express()

app.use(cors())

app.use(bodyParser())



app.get()