var dbconf = require('./dbconf.js');
//引入数据库
var mysql= require('mysql');

//实现本地链接
var pool = mysql.createPool({
  host: dbconf.DB_HOST,
  user: dbconf.DB_USER,
  password: dbconf.DB_PSD,
  database: dbconf.DB_NAME,
  port: dbconf.DB_PORT
});

//默认情况下是不允许执行多条查询语句的。要使用多条查询语句的功能，就需要在创建数据库连接的时候打开这一功能
mysql.createConnection( { multipleStatements: true } );

var queryData = function( sql, values ) {
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

// module.exports =  { queryData };
exports.queryData = queryData
