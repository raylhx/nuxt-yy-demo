const { Router } = require('express')

const router = Router()

const lists = {}
/* GET nav listing. */
router.get('/list', function (req, res, next) {
  res.json(lists)
})

/* GET nav by ID. */
router.get('/list/:tag', function (req, res, next) {
  const tag = parseInt(req.params.tag)
  if (tag !== '' && tag < lists.length) {
    res.json(lists[tag])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
