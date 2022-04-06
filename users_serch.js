const { stringify } = require('jade/lib/utils');
const { all } = require('./routes');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:pass@localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("data");
    var mysort = { type: 1 };
    dbo.collection("users"). find().toArray(function(err, result) { // 返回集合中所有數據
        if (err) throw err;
        console.log("%o",result);
        //console.log(JSON.stringify(result, null, 2));
        db.close();
    });
});