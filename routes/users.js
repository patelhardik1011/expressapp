var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('index', {layout: 'mylayout'});
});

router.get('/dynamic-content', function (req, res, next) {
    res.render('index', {data: "This is dynamic content"});
});

router.get('/custom-handelbar-helper', function (req, res, next) {
    res.render('index', {helpre_demo: [{a: 'test', b: 'test'}, {a: 'test', b: 'test'}, {a: 'test', b: 'test'}]});
});

module.exports = router;
