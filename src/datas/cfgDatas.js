/**
 * Created by Jhinwins on 2018/1/16.
 */

/**
 * 首页的轮播视图
 */
export let carouselItems = [
    {
        title: '为祖国的伟大复兴添砖加瓦',
        bgimg: 'http://www.wallcoo.com/nature/Apple_OS_X_Mountain_Lion_Wallpapers/wallpapers/1366x768/Earth%20and%20Moon.jpg',
        btns: [
            {
                title: '联系我们',
                link: 'contactme'
            }
        ]
    },
    {
        title: '加快祖国建设步伐',
        bgimg: 'http://www.wallcoo.com/nature/Daily_Snap_Shot_12_Nature_Wallpapers/images/fall1.jpg',
        btns: [
            {
                title: '联系我们',
                link: 'contactme'
            }
        ]
    }
];

/**
 * 首页下面的几个icon
 */
export let mainService = [
    {
        pic: 'https://png.icons8.com/cotton/60/000000/brick-wall.png',
        title: '建材采购',
        link: '/contactme'
    },
    {
        pic: 'https://png.icons8.com/cotton/60/000000/delivery.png',
        title: '货物运输',
        link: '/contactme'
    },
    {
        pic: 'https://png.icons8.com/color/60/000000/key-exchange.png',
        title: '设备租赁'
    },
    {
        pic: 'https://png.icons8.com/nolan/60/000000/technical-support.png',
        title: '相关咨询',
        link: '/contactme'
    },
];

/**
 * 服务内容
 */
export let services = [
    {
        type: '建材采购',
        key: 'purchase',
        pathname: '/services',
        items: [
            {
                type: '建筑材料',
                key: 'buildingMaterial',
                pathname: '/services/purchase/buildingMaterial',
                items: [
                    {
                        name: '砖瓦',
                        desc: '各种类型的砖，新旧都有',
                        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516082335222&di=08845e66c93310cf45a4b1e53fa9ded9&imgtype=0&src=http%3A%2F%2Fpic.qjimage.com%2Fchineseview125%2Fhigh%2F207-29312.jpg'
                    },
                    {
                        name: '水泥',
                        desc: '各种品牌价位的水泥均有,多少都行',
                        pic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1679959782,88269405&fm=27&gp=0.jpg'
                    },
                    {
                        name: '木材',
                        desc: '各种木材均有',
                        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516677726&di=a26c11e1616999346e18e04e3cde5327&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.yungold.cn%2Ffutures%2Farticle%2F201708%2Fa37.jpg'
                    }
                ]
            },
            {
                type: '装修材料',
                key: 'decoratingMaterial',
                pathname: '/services/purchase/decoratingMaterial',
                items: [
                    {
                        name: '瓷砖',
                        desc: '地磁砖，墙瓷砖等各种瓷砖',
                        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516082654060&di=8954b6aad8679791d54b9cf036df19c8&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fm8%2FM04%2F1A%2FF9%2FwKhQplVQAxWEU0KpAAAAAIW8XVU617.jpg'
                    },
                    {
                        name: '板材',
                        desc: '各种板材均有，适合做家具、装饰物等',
                        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516083095031&di=e8eae5409452ed32d77efc3d694fbfe7&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3936264708%2C154080544%26fm%3D214%26gp%3D0.jpg'
                    }
                ]
            }
        ]
    },
    {
        type: '设备租赁',
        key: 'lease',
        pathname: '/services',
        items: [
            {
                type: '运载车辆',
                key: 'truck',
                pathname: '/services/lease/truck',
                items: [
                    {
                        name: '货车',
                        desc: '各种大中小货车',
                        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516083183738&di=906ba7618677db672b4c53c44c26d067&imgtype=0&src=http%3A%2F%2Fwww.xcmg.com%2Fxgqc%2Fupload%2Fimages%2F2017%2F01%2F13%2Ff3adf40411c64d3c875a2e5a78dfb82d.jpg'
                    },
                    {
                        name: '装载机',
                        desc: '挖掘机、叉车、吊车等',
                        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516083239737&di=de7e324ddbfe4439f1627b16ecd5abfe&imgtype=0&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160425%2F17141823762_600x403.jpg'
                    }
                ]
            },
            {
                type: '机械',
                key: 'mechanics',
                pathname: '/services/lease/mechanics',
                items: [
                    {
                        name: '起重机',
                        desc: '各类起重机',
                        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516083293513&di=678ade26bc482c2023a178902f664bbc&imgtype=0&src=http%3A%2F%2Fpic.huishoushang.com%2Fproduct%2F2017%2F07%2F16%2F2017071611231620615037.jpg'
                    },
                    {
                        name: '压实机械',
                        desc: '压实机械，工程起重机械，桩工机械，路面机械，混凝土机械，混凝土制品机械，钢筋级预应力机械，装修机械，高空作业机械等',
                        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516678185&di=c1022fb9321a9c34abba8c6dbb921b90&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.machine365.com%2Fnews%2F2010%2F1%2F19%2F20100119100048.jpg'
                    }
                ]
            }
        ]
    },
    {
        type: '货物运输',
        key: 'transport',
        pathname: '/services',
        items: [
            {
                type: '建筑垃圾',
                key: 'muck',
                pathname: '/services/transport/muck',
                items: [
                    {
                        name: '渣土',
                        desc: '建筑工地产生的建筑垃圾均可运输',
                        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516083518003&di=577de137467bdeda75ac085ec9afc062&imgtype=0&src=http%3A%2F%2Fpic192.gtobal.com%2Fimage1%2F1E%2F27%2FwKgSE1HUVqeAZI4HAACN0wKmL6A771.jpg'
                    },
                    {
                        name: '普通垃圾',
                        desc: '生活垃圾，工业垃圾等',
                        pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1042242183,4273615428&fm=27&gp=0.jpg'
                    }
                ]
            },
            {
                type: '搬家起重',
                key: 'carry',
                pathname: '/services/transport/carry',
                items: [
                    {
                        name: '搬家起重',
                        desc: '专业提供公司搬家/工厂搬迁/设备搬运/医院搬迁等,快速高效,收费低!',
                        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516678442&di=8e58f3aab6c3e369b79ab9388eddd8da&imgtype=jpg&er=1&src=http%3A%2F%2Fimgupload1.youboy.com%2Fimagestore20160721ceaa6066-7cb3-48a5-ba12-2c46c946e181.jpg'
                    }
                ]
            }
        ]
    }
];