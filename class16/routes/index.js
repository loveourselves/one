module.exports=function(app,dirname){
	require("./favicon.ico")(app,dirname);	//主页面
	require("./home")(app,dirname);	//主页面
	require("./regLogin")(app,dirname);	//注册页面
}
