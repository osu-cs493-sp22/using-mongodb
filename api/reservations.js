const { Router } = require('express')
const router = Router()

router.post('/', function (req, res, next) {
    res.status(201).send({})
})

module.exports = router
