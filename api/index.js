const { Router } = require('express')

const router = Router()

router.use('/lodgings', require('./lodgings'))
router.use('/reservations', require('./reservations'))

module.exports = router
