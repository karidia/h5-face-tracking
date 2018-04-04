/* eslint-disable */
var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var bodyParser = require('body-parser');
var moment = require('moment'); //时间格式化

app.use(bodyParser());

//系统配置
var devUrl = "http://woaaptecsr.woaap.com:60"; //http://searchagent2.woaap.com/"; //"http://10.10.60.36/dslr/";//
var PHPSESSID = '';

app.use('/', express.static(__dirname + '/public/dist/'));

//get请求后台
function getApiData(url, req, res) {
	if (url == "/Service/getUserList") {
		console.log("请求时间：" + moment(new Date()).format("HH:mm:ss"));
		request({
			url: devUrl + url,
			headers: {
				'Cookie': 'ci_session=' + PHPSESSID
			}
		}, function(err, response, body) {
			res.writeHead(200, {
				'Connection': 'keep-alive',
				'Content-Type': 'text/event-stream',
				'Cache-Control': 'no-cache'
			});
			//setInterval(function(){
			//res.write("id: " + Date.now() + "\ndata: " + 123 + "\n\n");
			res.write(body);
			//}, 1000);
			//console.log(body,"sse1");
			//res.write(body);
			console.log("处理时间：" + moment(new Date()).format("HH:mm:ss"));
			res.end()
		});

	} else {
		request({
			url: devUrl + url,
			headers: {
				'Cookie': 'ci_session=' + PHPSESSID
			}
		}, function(err, response, body) {
			//body=JSON.parse(body);
			//console.log(body);
			res.send(body);
		});
	}

}
//post请求后台
function postApiData(url, data, req, res) {
	if (url == "/Login/ajaxLogin") {
		PHPSESSID = "";
		var formData = {
			"url": devUrl + url,
			"form": data
		};
		console.log(formData);
		request.post(formData, function(err, response, body) {
			console.info(body)
			body = JSON.parse(body);
			if (body.errormsg) {
				PHPSESSID = body.errormsg;
				console.log(body.errormsg);
			};
			//return;
			res.send(body);
		});
	} else {
		if(url== '/Service/getLaiyeKeywordList') {
			console.info(devUrl+url,data)
		}
		request.post({
			url: devUrl + url,
			form: data,
			headers: {
				'Cookie': 'ci_session=' + PHPSESSID
			}
		}, function(err, response, body) {
			console.log(body)
			res.send(body);
		});
	}
}

//get中转
app.get('/getdata/*', function(req, res) {
	var url = req.url.replace('/getdata', '');
	//console.log(url);
	getApiData(url, req, res);
});
//post中转
app.post('/getdata/*', function(req, res) {
	var url = req.url.replace('/getdata', '');
	var reqData = req.body;
	postApiData(url, reqData, req, res);
});
//获取IP
// var os = require('os');
// var IPv4,hostName;
// for(var i=0;i<os.networkInterfaces().en0.length;i++){
//     if(os.networkInterfaces().en0[i].family=='IPv4'){
//         IPv4=os.networkInterfaces().en0[i].address;
//     }
// }

var server = app.listen(9999, function() {
	console.log('服务地址', server.address());
});
