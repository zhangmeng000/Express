var express = require('express')
var app = express()

app.get('/:name', function (req,res) {
	var username = req.params.name;
	var page = "<html>" + "<body>" + "<h2>" + username + "的购物车" + "</h2>" + "</body>" + "</html>"
  res.send(page)
})
app.post('/:name', function (req,res) {
  res.send('a Post Require revisize'+req.params.name)
})
app.get('/aaa', function (req, res) {
	var page = "<html>" + "<body>" + "<h2>aaa.html</h2>" + "</body>" + "</html>"
  console.log('hello aaa')
})
app.listen(3000,function(){
	console.log('running on port 3000...please visit localhost:3000')
})
