const { Router } = require('express')

const router = Router()

router.use('/lodgings', require('./lodgings'))

module.exports = router
