// var dbDao = require('./db/db.js');
// // import { query } from "./db/db.js";
// //网络
// var http = require('http');
// var url = require('url');
//
// http.createServer(function(req,res){
//   // res.writeHead(200,{"Content-type":"application/json"});
//   res.writeHead(200,{"Content-type":"text/blain; charset=utf-8","Access-Control-Allow-Origin": "*"});
//   // res.write("Hello NodeJs");
//   // res.json();
//   // var back = {
//   //   id: 1,
//   //   name: '张三'
//   // };
//   //获取get请求中的参数
//   var requset_url = req.url;
//   //将字符串格式参数转化为对象使用
//   var strurl  = url.parse(requset_url,true).query;
//   var sum = strurl.userId+ '-------' + strurl.date;
//   console.log(JSON.stringify(strurl));
//   console.log(sum);
//
//   dbDao.queryData('SELECT * FROM user', '').then(function (result) {
//
//     res.end(JSON.stringify(result));
//
//   },function (error) {
//
//   });
//   // res.end();
// }).listen(8888);

//网络
var http = require("http");
//引入数据库
var mysql=require('mysql');
var url = require('url');
//实现本地链接
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'YU72124009lin%',
  database: 'first_db',
  port: '3306'
});

//默认情况下是不允许执行多条查询语句的。要使用多条查询语句的功能，就需要在创建数据库连接的时候打开这一功能
mysql.createConnection( { multipleStatements: true } );

function query( sql, values ) {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection){
      connection.query(sql, values, function(err, results){
        if(err) {
          reject( err );
        } else {
          results = JSON.stringify(results);
          results = JSON.parse(results);
          resolve( results );
        }
      });
      connection.release();
    });
  });
};

http.createServer(function(req,res){
  // res.writeHead(200,{"Content-type":"application/json"});
  res.writeHead(200,{"Content-type":"text/blain; charset=utf-8","Access-Control-Allow-Origin": "*"});
  // res.write("Hello NodeJs");
  // res.json();
  // var back = {
  //   id: 1,
  //   name: '张三'
  // };

  //获取get请求中的参数
  var requset_url = req.url;
  //将字符串格式参数转化为对象使用
  var strurl  = url.parse(requset_url,true).query;
  var sum = strurl.userId+ '-------' + strurl.date;
  console.log(JSON.stringify(strurl));
  console.log(sum);

  query('SELECT * FROM user', '').then(function (result) {

    res.end(JSON.stringify(result));

  },function (error) {

  });

  // res.end();
}).listen(8888);






