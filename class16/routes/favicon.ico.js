var page="view/regLogin/regLogin.html";
module.exports=function(app,dirname){
	app.get("/regLogin",function(req,res){
		res.sendFile(dirname+"/"+page);
	})
}
