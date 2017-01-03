/**
 * Created by seventrust on 02-01-17.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home', {title: "Una nueva aplicacion"});
})
