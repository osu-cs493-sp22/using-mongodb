const express = require('express')
const morgan = require('morgan')

const api = require('./api')
const { connectToDb } = require('./lib/mongo')

const app = express()
const port = process.env.PORT || 8000

/*
 * Use the popular request logger Morgan: https://github.com/expressjs/morgan.
 */
app.use(morgan('dev'))

app.use(express.json())

/*
 * API endpoints are factored into the api/ directory.
 */
app.use('/', api)

app.use('*', function (req, res, next) {
    res.status(404).send({
        err: "This URL was not recognized: " + req.originalUrl
    })
})

/*
 * This route will catch any errors thrown from our API endpoints and return
 * a response with a 500 status to the client.
 */
app.use('*', function (err, req, res, next) {
    console.error("== Error:", err)
    res.status(500).send({
        err: "Server error.  Please try again later."
    })
})

connectToDb(function () {
    app.listen(port, function () {
        console.log("== Server is listening on port:", port)
    })
})
