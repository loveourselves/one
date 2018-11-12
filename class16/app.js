var express = require("express");
var app = express();



//静态资源
/*app.use(express.static("./public/css"));
app.use(express.static("./public/img"));
app.use(express.static("./public/js"));
app.use(express.static("./public/logo"));
app.use(express.static("./public/upload/img"));*/
app.use(express.static("./public"));
app.use(express.static("./view"));

/*app.get("/",function(req,res){
	res.sendFile(__dirname+"/"+page);
})*/




var router=require("./routes");
//console.log("router:",router);

router(app,__dirname);

app.listen(82,function(){
	console.log("OK 82");
})
