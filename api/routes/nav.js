const { Router } = require('express')

const router = Router()

const nav = [
  {
    name: '热门',
    tag: 'index',
    title: 'YY-全民娱乐的互动直播平台',
    desc: {
      'description': 'YY致力于打造全民娱乐的互动直播平台，以多样的美女互动、优质的直播内容、极致的互动体验，满足用户音乐、舞蹈、户外等直播及绝地求生、王者荣耀等热门游戏直播的观看需求。',
      'keywords': 'yy,直播,音乐,舞蹈,户外,脱口秀,二次元,mc,游戏,ASMR,小视频,神曲,吃鸡,购物,电影,绝地求生,王者荣耀'
    },
    index: 0
  },
  {
    name: '歌舞',
    tag: 'singing',
    title: '歌舞_歌舞表演直播大全 - YY',
    desc: {
      'description': 'YY在线直播歌舞表演,海量美女明星主播与你面对面互动，在线视频聊天、K歌比拼、歌舞表演。赶快加入YY，与美女主播一齐嗨翻天。',
      'keywords': '歌舞,歌舞表演,歌舞直播'
    },
    index: 1
  },
  {
    name: '脱口秀',
    tag: 'show',
    title: '脱口秀_脱口秀直播_脱口秀精彩视频_YY',
    desc: {
      'description': 'YY直播拥有海量的脱口秀直播内容,各类热门脱口秀精彩直播内容全天候不间断,与脱口秀主播一起零距离互动,全新脱口秀直播尽在YY直播。',
      'keywords': '脱口秀,脱口秀直播,脱口秀直播间,脱口秀直播地址,脱口秀直播,脱口秀精彩视频直播'
    },
    index: 2
  },
  {
    name: '喊麦',
    tag: 'music',
    title: '喊麦直播_喊麦精彩解说直播_喊麦视频_YY直播',
    desc: {
      'description': '喊麦直播为您提供主流主播喊麦视频直播,喊麦精彩解说,喊麦攻略,喊麦技巧视频。',
      'keywords': '喊麦,喊麦直播,喊麦视频'
    },
    index: 3
  },
  {
    name: '户外',
    tag: 'travel',
    title: '户外直播专区_户外直播大全_户外视频 - YY',
    desc: {
      'description': '户外直播是YY主播在户外娱乐的直播模式，提供户外旅游、户外搭讪、户外打野、户外汽车评测等精彩节目。',
      'keywords': '户外,户外直播,户外视频'
    },
    index: 4
  },
  {
    name: '二次元',
    tag: 'acg',
    title: '二次元_二次元直播_萌妹子直播,宅男必备_YY',
    desc: {
      'description': 'YY二次元版块是在ACG已成为年轻人娱乐主流、泛二次元受众越来越多的情况下应运而生的版块，版块主要内容是coser舞见、歌手声优、二次元线下活动及其他二次元相关的各种直播内容，版块旨在给大家提供原生态的二次元直播内容，打破次元壁垒，全新二次元直播尽在YY直播.',
      'keywords': '二次元,二次元直播,二次元直播间,二次元直播地址,萌妹日常,asmr,声优唱见,ACG现场,宅游,cosplay'
    },
    index: 5
  },
  {
    name: '现场',
    tag: 'star',
    title: '明星直播_明星精彩解说直播_明星视频_YY直播',
    desc: {
      'description': 'YY明星直播为您提供明星视频直播,明星精彩解说,明星攻略,明星技巧视频。',
      'keywords': '明星,明星视频,明星解说'
    },
    index: 6
  },
  {
    name: '游戏',
    tag: 'game',
    title: '王者荣耀直播_王者荣耀视频直播_王者荣耀专区 - YY',
    desc: {
      'description': '王者荣耀直播是YY全新的王者荣耀直播模式,提供王者荣耀视频与王者荣耀精彩直播解说,其中包含王者荣耀攻略技巧、王者荣耀热门赛事直播。',
      'keywords': '王者荣耀直播,王者荣耀视频,王者荣耀'
    },
    index: 7
  },
  {
    name: '萌宠',
    tag: 'pet',
    title: '萌宠直播_萌宠视频直播_萌宠专区 - YY',
    desc: {
      'description': '萌宠直播是YY主播的萌宠直播模式,提供萌宠视频与萌宠精彩直播解说,其中包含萌宠养成攻略技巧、萌宠成长记直播。',
      'keywords': '萌宠直播,萌宠视频,萌宠'
    },
    index: 8
  },
  {
    name: '综合',
    tag: 'others',
    title: '生活直播_生活精彩解说直播_生活视频_YY直播',
    desc: {
      'description': '生活直播为您提供主播生活琐事视频直播,生活精彩解说,生活攻略,生活技巧视频。',
      'keywords': '生活,生活视频,生活解说'
    },
    index: 9
  }
]
router.get('/nav', function (req, res, next) {
  res.json(nav)
})

module.exports = router
