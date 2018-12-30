const { Router } = require('express')

const router = Router()

const list = {
  index: [
    {
      name: '歌舞青春若茜',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/NzY4Mzg4ZWYtNjZmMC00MDUzLWE0NGYtYTM3YjY2YmJmMDll.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//screenshot.dwstatic.com/yysnapshot/6c14d31ec780e17bdfd97be06a49e83d7fd00b0b?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '经典搞笑鬼片林振英系列',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/NTgxMDJlMzgtMDM2NS00Mjc0LWFmMjAtMWQ5MDQ2NjBhYTZj.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '起飞了。。。',
      users: '88888',
      url: '//mobilelivephoto.bs2dl.yy.com/2331976998_1540973842.411652.jpg?ips_thumbnail/3/w/363/h/330/format=jpeg'
    },
    {
      name: '日本奈良喂小鹿。',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '治愈系仙女漫漫',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/NDg2NTBkOTktM2E1NS00YTY0LTljODItNzViNTU1MWM5M2Y2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '真心寻人一起玩',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '关注wyj主播',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '歌舞青春若茜',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    }
  ],
  singing: [
    {
      name: '甜音泡泡情歌动人',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/ZDYyODBhODktMWZiMC00ZTAxLWI0NDctMmMwMGRhNWM4MzM3.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '绝色美人佳琦',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/N2EyZDg5NWItOGJmNy00YWQ5LThiZTQtZTRjMmI3MzM1OTJl.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '清澈治愈系女声田子晴',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/ZWFjZGZjMWUtNGVmYi00NGI4LTgwZDMtYzgzNWQ5ZDFmZmMx.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '颜值担当女神微凉',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '活力笙儿夺命热舞',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/ZDUyNGZhZTctMDc4ZS00ZGU1LTgwZGEtODA2OTVkYzBjZjE5.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '草原姐妹花大丫二丫',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '真心寻人一起玩',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '关注wyj主播',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '歌舞青春若茜',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    }
  ],
  show: [
    {
      name: '歪歪第一新闻主播九情',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/ZTI4YjdlZTgtOGVmNC00ZmI4LThhMTYtNDAwZTQ4MWViOGM0.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '专注搞笑一灯哥',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/MjIzZjY4ODItMDY1ZS00MDFiLWFjMDQtMmY3NGVkNzk3ZDVj.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWU4MzMyODgtMDUwZi00NmZkLTk4ZmEtZWY1NDJjMDcwM2Ez.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: 'YY第一新闻王炜坤',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/M2EwZjE2MTktYWE0Ny00ZGRmLThlOWYtNDgwNjczNTk1YTQ2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '搞笑唠嗑地主白',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/NTg1ODI1OTEtYzA2ZS00ZWE0LWEwM2EtNzMxMmRkNzhjNzY1.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '平安日快乐',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '真心寻人一起玩',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '关注wyj主播',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '歌舞青春若茜',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    }
  ],
  music: [
    {
      name: '谢小宇搞笑大本营',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/NTVkMjZhMGEtZTY5OS00YTIxLThhYWMtZjg2NThkYjRkYTY4.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '最帅男偶像',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/ZTYyYzg5YTMtYmQ2Ny00Y2M1LWFkZjYtZmZiZDU0MjlkNWIw.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '舞帝小可爱米米儿',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/YzdkN2YxYjMtMjIzOC00ZmM1LTlkMjItYThkMzZlNDc1MmYw.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '中文DJ女王',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OTQ4YmRkMzUtMzUxZi00MTdjLTk2NmEtYTcyMjJkNWJhYjU5.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '日本奈良喂小鹿',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '治愈系仙女漫漫',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '真心寻人一起玩',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '关注wyj主播',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '歌舞青春若茜',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    }
  ],
  travel: [
    {
      name: '风筝户外套路王',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/NWMxMDAwMmEtYzQ5ZC00ZTk1LWIyMTYtZWE1NmY0M2MzODBh.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '野人强野性户外',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/YTZjMWMzMzMtN2Y3MS00NjZhLTgyMTMtOTZjYmIwZWQyY2Fj.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '电家大公子占山头',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/NzVlNTE5NGQtM2UzMC00NTFlLTgzMWYtYjdjMzg1YzJhODY3.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '史前巨货即将出世',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/NGMyZjg1ZWYtMWUyZi00MmYxLWJhODYtMmQzMWVkZjA4NGQ2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '活力笙儿夺命热舞',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '草原姐妹花大丫二丫',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '真心寻人一起玩',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '关注wyj主播',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '歌舞青春若茜',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    }
  ],
  acg: [
    {
      name: '带噶猴呀',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/NGMyMzQzZTMtZWRjMC00YmQ4LWJiNjUtNjExY2FlMjU4Yjcy.png?imageview/4/0/w/320/h/180/blur/1'
    },
    {
      name: '蓬莱小仙雯儿',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/YzQwY2MwN2UtZDMyNi00ZWE3LWIzYmMtZGVmN2I2MjQ4OWQz.jpg?imageview/4/0/w/320/h/180/blur/1'
    },
    {
      name: '吾家有女初长成',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/MTU3NWIzODctOWIzYi00OTlhLWFiNmMtN2RlOWZhNThmMTU5.jpg?imageview/4/0/w/320/h/180/blur/1'
    },
    {
      name: '是你的小可爱',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/ZDExYzEwNGItYjA0OC00YjUxLTg3MWYtZDUzOTczNmUzNzYz.png?imageview/4/0/w/320/h/180/blur/1'
    },
    {
      name: '搞笑唠嗑地主白',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/YWEzNDdjZGMtMjBjOC00ZWQwLTk5ZTMtYTY4ZjJkNGEzOTZj.png?imageview/4/0/w/320/h/180/blur/1'
    },
    {
      name: '平安日快乐',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '真心寻人一起玩',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '关注wyj主播',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '歌舞青春若茜',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    }
  ],
  star: [
    {
      name: '品冠暌违两年发新专辑',
      users: '88888',
      url: '//emyfs.bs2dl.yy.com/ZjBkNDg0MGEtZTM3Yy00N2EzLTg0NjUtNzAxYjkxNDk0ZGJj.jpg'
    },
    {
      name: '吴奇隆新剧发布会',
      users: '88888',
      url: '//mobilelivephoto.bs2dl.yy.com/2201744517_1517400056.927295.jpg'
    },
    {
      name: '赵又廷杨子姗再度合作',
      users: '88888',
      url: '//emyfs.bs2dl.yy.com/YzFiOGIzNmYtODhhOS00ODIwLWJhZDEtZTJjOWNmNmFmZmJj.jpg'
    },
    {
      name: '辰亦儒回归终极一班5',
      users: '88888',
      url: '//emyfs.bs2dl.yy.com/Y2I3MDc0NTgtZDc1Ni00OTA1LWIzNGQtYTBmZDJjY2IzYTVh.jpg'
    },
    {
      name: '搞笑唠嗑地主白',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '平安日快乐',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '真心寻人一起玩',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '关注wyj主播',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '歌舞青春若茜',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    }
  ],
  game: [
    {
      name: 'P城 城主  扫除乱民',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/ZWNjMTIzNmYtODM3Zi00Zjc3LWFlZDYtNTAyOTJmZDk3Njdl.jpg?imageview/4/0/w/320/h/180/blur/1'
    },
    {
      name: '王者荣耀24小时大神直播',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/NzkzMGU1NzAtZmQyYy00NzA1LThlNzEtZjBkZDFmNWU2NTZj.jpg?imageview/4/0/w/320/h/180/blur/1'
    },
    {
      name: '天道勤酬',
      users: '88888',
      url: '//screenshot.dwstatic.com/yysnapshot/f5fd21a6cbf4cc85da998e3a495e90eb3b434401?imageview/4/0/w/320/h/180/blur/1'
    },
    {
      name: '低价接单五排带分中',
      users: '88888',
      url: '//screenshot.dwstatic.com/yysnapshot/85d9b42d27ada53ca378f1787a63d142178f3669?imageview/4/0/w/320/h/180/blur/1'
    },
    {
      name: '日本奈良喂小鹿',
      users: '88888',
      url: '//screenshot.dwstatic.com/yysnapshot/46ad8fffdaaa3527ce225f8b730873ff7638b3fe?imageview/4/0/w/320/h/180/blur/1'
    },
    {
      name: '治愈系仙女漫漫',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/NTEzYzY0NGUtZTNjNS00NjZiLWIxZTctYTZiZTM4NDJiZDVm.jpg?imageview/4/0/w/320/h/180/blur/1'
    },
    {
      name: '真心寻人一起玩',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '关注wyj主播',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '歌舞青春若茜',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    }
  ],
  pet: [
    {
      name: '特价处理法牛',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/ZDY0MDcyYTctZmEzZi00ODc2LWIxMDAtNTkxYmRmYTQwNDA4.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '沛县最大狗市捡漏',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/ZTk3NjQ1ZDYtODkwZS00M2QyLTgzNDQtNmQ4YTZlOTUxMDhh.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '狗市看狗 帮问帮挑',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/ZjYwNWZiZjItY2I1ZC00YTMyLWIwZDItN2Q1YTY1ZTE1YTFj.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '爱狗帮开业大吉',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/MmU3NDNmZGYtYTdhZC00NzM4LTlmMWEtZmE0YjQwNTcyZTIw.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '活力笙儿夺命热舞',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '草原姐妹花大丫二丫',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '真心寻人一起玩',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '关注wyj主播',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '歌舞青春若茜',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    }
  ],
  others: [
    {
      name: '平安日快乐',
      users: '88888',
      url: '//zonemin.bs2.yy.com/group16/M00/ae52728bf96046d8862f2405e0d585fe.jpg'
    },
    {
      name: '真心寻人一起玩',
      users: '88888',
      url: '//mobilelivephoto.bs2dl.yy.com/2306937097_1545534895.jpg?ips_thumbnail/3/w/363/h/330/format=jpeg'
    },
    {
      name: '关注wyj主播',
      users: '88888',
      url: '//zonemin.bs2.yy.com/group16/M00/dad09453c2474193abb839bd314807cd.jpg'
    },
    {
      name: '新主播求关注',
      users: '88888',
      url: '//screenshot.dwstatic.com/yysnapshot/ede933aefc9e9074aa848e36fe27ec68b5f86657?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '搞笑唠嗑地主白',
      users: '88888',
      url: '//mobilelivephoto.bs2dl.yy.com/2298897847_1544081411.jpg?ips_thumbnail/3/w/363/h/330/format=jpeg'
    },
    {
      name: '平安日快乐',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '真心寻人一起玩',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '关注wyj主播',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '歌舞青春若茜',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    },
    {
      name: '儒雅绅士小北京',
      users: '88888',
      url: '//emyfs.bs2cdn.yy.com/OWNmMmIwMWEtMzZkNC00YWZkLWJmOTYtZjY5YjM2NGE3OGE2.jpg?imageview/4/0/w/363/h/330/blur/1'
    }
  ]
}
router.get('/list/:tag', function (req, res, next) {
  const tag = req.params.tag
  if (tag !== '') {
    res.json(list[tag])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
