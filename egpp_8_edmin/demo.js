var express = require('express');
var router = express.Router();
var urllib=require('url');

//获取banner url
router.get('/bannerUrl',function (req,res,next) {
    var data = {'name': 'jifeng', 'company': 'taobao'};
    var params=urllib.parse(req.url,true);
    //console.log('请求1:'+params);
    if (params.query && params.query.callback) {
        //console.log('请求2:'+params.query);
        var str =  params.query.callback + '(' + JSON.stringify(data) + ')';//jsonp
        res.send(str);
    } else {
        res.send(JSON.stringify(data));//普通的json
    }
});