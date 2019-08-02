const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
require("dotenv").config()
const PORT = process.env.PORT || 7000
const path = require("path")
const expressJwt = require('express-jwt')


// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "build")))




// Connection to DB
mongoose.connect(process.env.MONGODB.URI || 'mongodb://localhost:27017/groupprojectdb', 
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log('connected to the DB'))
.catch((err) => console.log(err))



// Routes
app.use(`/api`, expressJwt({secret: process.env.SECRET}))
app.use('/inventory', require('./routes/inventoryRouter.js'))
app.use(`/auth`, require(`./routes/authRouter.js`))
app.use(`/api/cart`, require(`./routes/cartRouter.js`))
app.use(`/api/favorite`, require(`./routes/favoriteRouter.js`))
//  global Error Handle

app.use((err, req, res, next) => {
    console.error(err)
    
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ message: err.message })
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Server listen
app.listen(PORT, () => {
    console.log('its up')
})


