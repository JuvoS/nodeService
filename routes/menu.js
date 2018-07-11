var express = require('express');
var router = express.Router();
var fs = require('fs');
const http = require('http');
const url = require("url");
var PATH = './public/data/';

//设置跨域访问
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//读取数据：data/read?type=it
router.get('/get', function(req, res, next) {
	
	fs.readFile(PATH +'menu.json', function(err,data){
		if(err){
			return res.send({
				status : 0,
				info : '读取文件异常'
			});
		}
		var COUNT = 50;
		var obj = JSON.parse(data.toString());
		if(obj.length > COUNT){
			obj = obj.slice(0, COUNT);
		}
		
		
		return res.send({
			status : 1,
			data : obj
		});
	});
	
	
});

module.exports = router;