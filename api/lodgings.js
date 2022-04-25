const { Router } = require('express')

const { validateAgainstSchema } = require('../lib/validation')
const {
    LodgingSchema,
    insertNewLodging,
    getAllLodgings,
    getLodgingById
} = require('../models/lodging')

const router = Router()

router.get('/', async function (req, res, next) {
    const lodgings = await getAllLodgings()
    res.status(200).send({
        lodgings: lodgings
    })
})

router.post('/', async function (req, res, next) {
    if (validateAgainstSchema(req.body, LodgingSchema)) {
        const id = await insertNewLodging(req.body)
        res.status(201).send({ id: id })
    } else {
        res.status(400).send({
            err: "Request body is not a valid Lodging"
        })
    }
})

router.get('/:id', async function (req, res, next) {
    const id = req.params.id
    const lodging = await getLodgingById(id)
    res.status(200).send(lodging)
})

router.patch('/:id', function (req, res, next) {
    const id = req.params.id
    res.status(200).send({})
})

router.delete('/:id', function (req, res, next) {
    const id = req.params.id
    res.status(204).send()
})

module.exports = router
