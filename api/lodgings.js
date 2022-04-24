const { Router } = require('express')
const router = Router()

router.get('/', function (req, res, next) {
    res.status(200).send({})
})

router.post('/', function (req, res, next) {
    res.status(201).send({})
})

router.get('/:id', function (req, res, next) {
    const id = req.params.id
    res.status(200).send({})
})

router.patch('/:id', function (req, res, next) {
    const id = req.params.id
    res.status(200).send({})
})

router.delete('/:id', function (req, res, next) {
    const id = req.params.id
    res.status(204).send()
})

router.get('/:id/reservations', function (req, res, next) {
    const id = req.params.id
    res.status(200).send({})
})

module.exports = router
