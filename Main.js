var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();

router.get('/',function(req,res){
  res.json({"error" : false, "message" : "Hello!"});
});

router.post('/add',function(req,res){
  res.json({"error" : false, "message" : "success", "data" : req.body.num1 + req.body.num2});
});

app.use('/',router);

app.listen(process.env.PORT || 3000,function(){
  console.log("Listening at PORT 3000");
})