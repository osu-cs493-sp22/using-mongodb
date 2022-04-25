const { Router } = require('express')

const { validateAgainstSchema } = require('../lib/validation')
const { ReservationSchema, insertNewReservation } = require('../models/reservation')

const router = Router()

router.post('/', async function (req, res, next) {
    if (validateAgainstSchema(req.body, ReservationSchema)) {
        const id = await insertNewReservation(req.body)
        res.status(201).send({ id: id })
    } else {
        res.status(400).send({
            err: "Request body is not a valid Lodging"
        })
    }
})

module.exports = router
