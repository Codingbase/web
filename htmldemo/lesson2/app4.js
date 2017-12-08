/**
 * Created by Shen on 2017/12/8.
 */
var express = require('express');
var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
//url模块是node.js标准库里面的
var url = require('url');
var app = express();
var cnodeUrl = 'https://www.baidu.com';

superagent.get(cnodeUrl)
    .end(function (err, res) {
        if (err) {
            return console.error(err);
        }
        var topicUrls = [];
        var $ = cheerio.load(res.text);

    //    获取首页所有链接
        $("#topic_list.topic_title").each(function (idx, element) {
            var $element = $(element);
            var href = url.resolve(cnodeUrl, $element.attr('href'));
            topicUrls.push(href);
        });
        console.log(topicUrls);

    });
app.get('/user',function (req,res) {
    console.log('hello world');
    res.send("<h1>hello html</h1>");

})
app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});