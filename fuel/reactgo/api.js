var mock = require('mockjs');
var express = require('express');
var router = express.Router();

/*
 * 綁定 成功
 */
router.post('/authuser/login.json', function(req, res) {
    res.json({
        status: true,
        message: "Login success!",
        data: {
            username: "wesley123",
            photo: "img/user.png",
            main_category: [{
                id: "1",
                name: "內容管理",
                img: "img/icons/mainnav/cms.png"
            }],
            sub_category: [{
                id: "1",
                name: "這是sub category標題 1",
                img: "icon-star",
                list: [{
                    id: "1",
                    name: "CMS 資訊總覽",
                    img: "file/thumbnail/cms_info.jpg"
                }]
            }, {
                id: "2",
                name: "這是sub category標題 2",
                img: "icos-map",
                list: [{
                    id: "2",
                    name: "新聞與活動管理",
                    img: "file/thumbnail/news.jpg"
                }]
            }, {
                id: "3",
                name: "只有一層",
                img: "icos-map",
                list: []
            }]
        }
    });
});

router.get('/data', function(req, res) {
    var random = mock.Random;
    var data = {
        boolean: random.boolean(),
        integer: random.integer(1, 9527),
        float: random.float(1, 200, 0, 99),
        string: random.string(7, 10),
        range: random.range(1, 78, 5)
    };

    res.json(data);
});

module.exports = router;
