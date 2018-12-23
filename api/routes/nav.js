const { Router } = require('express')

const router = Router()

// Mock nav
const nav = [
  {
    name: '热门',
    index: 0
  },
  {
    name: '歌舞',
    index: 1
  },
  {
    name: '脱口秀',
    index: 2
  },
  {
    name: '喊麦',
    index: 3
  },
  {
    name: '户外',
    index: 4
  },
  {
    name: '二次元',
    index: 5
  },
  {
    name: '现场',
    index: 6
  },
  {
    name: '游戏',
    index: 7
  },
  {
    name: '萌宠',
    index: 8
  },
  {
    name: '综合',
    index: 9
  },
  {
    name: '活动中心',
    index: 10
  }
]

/* GET nav listing. */
router.get('/nav', function (req, res, next) {
  res.json(nav)
})

/* GET nav by ID. */
router.get('/nav/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < nav.length) {
    res.json(nav[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
