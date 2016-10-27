var http=require("http");

var server=http.createServer(function(req,res)
{
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("hello");

});
server.listen(8083,function()
{
	console.log("server listening at port 8081");
});