var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('casestudies/casestudy-1', {title: 'Future.ai|An AI and Data Science Company'});
});

module.exports = router;