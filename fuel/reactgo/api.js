var mock    = require('mockjs');
var express = require('express');
var router  = express.Router();

/*
 * 綁定 成功
 */
router.post('/authuser/login.json', function(req, res) {
    res.json({
        status: "0",
        message: "",
        data: {
            id: "3",
            username: "nic",
            group: "50",
            last_login: "1473582814",
            accessible_level: {
                p1: 2
            }
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
