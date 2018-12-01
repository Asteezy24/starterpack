const router = require('express').Router()
const db = require('../functions/db')

router.get('/', async (req, res) => {
  const data = await db.doSomething()
  res.json({ error: false, data })
})

module.exports = router
