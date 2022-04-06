const { stringify } = require('jade/lib/utils');
const { $where } = require('./models/book');
const { all } = require('./routes');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:pass@localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("data");
    var mysort = { "type": 1 };
 
    dbo.collection("pharmacies"). find({"masks.price":{ $bsonSize: null }}).toArray(function(err, result) { // 返回集合中所有數據
        if (err) throw err;
        //列出在一個價格範圍內擁有多於或少於 x 個面膜產品的所有藥店
        console.log(JSON.stringify(result,null,2));
        //console.log(result);
        //console.log("%o",result);
        //console.log(JSON.stringify(result, null, 2));
        db.close();
    });
    

});

//
//列出在特定時間開放的所有藥店，如果需要，可以在一周中的某一天開放
//console.log(JSON.stringify(result, ["openingHours","name"]));
//列出給定藥房出售的所有口罩，按口罩名稱或口罩價格排序
//console.log(JSON.stringify(result,["name","masks","price"],2));
//列出在一個價格範圍內擁有多於或少於 x 個面膜產品的所有藥店
//List all pharmacies that have more or less than x mask products within a price range

