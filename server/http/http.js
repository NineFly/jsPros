//网络
import {dbDao} from "../db/db";

var http = require("http");

http.createServer(function(req,res){
  res.writeHead(200,{"Content-type":"text/blain; charset=utf-8","Access-Control-Allow-Origin": "*"});

  dbDao.query('SELECT * FROM user', '').then(function (result) {

    res.end(JSON.stringify(result));

  },function (error) {

  });

}).listen(8888);
