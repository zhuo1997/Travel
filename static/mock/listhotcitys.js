import Mock from 'mockjs'
Mock.mock('/listhot',/post|get/i,{
    "city1" : {
        id: '01',
        name: '北京',
        spell: 'beijing'
    },
    "city2" : {
        id: '02',
        name: '上海',
        spell: 'shanghai'
    },
    "city3" : {
        id: '03',
        name: '广州',
        spell: 'guangzhou'
    },
    "city4" : {
        id: '04',
        name: '深圳',
        spell: 'shenzhen'
    },
    "city5" : {
        id: '05',
        name: '杭州',
        spell: 'hangzhou'
    },
    "city6" : {
        id: '06',
        name: '武汉',
        spell: 'wuhan'
    }
})