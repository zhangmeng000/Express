// var express = require('express')
// var app = express()
//
// app.get('/:name', function (req,res) {
// 	var username = req.params.name;
// 	var page = "<html>" + "<body>" + "<h2>" + username + "的购物车" + "</h2>" + "</body>" + "</html>"
//   res.send(page)
// })
// app.post('/:name', function (req,res) {
//   res.send('a Post Require revisize'+req.params.name)
// })
// app.get('/aaa', function (req, res) {
// 	var page = "<html>" + "<body>" + "<h2>aaa.html</h2>" + "</body>" + "</html>"
//   console.log('hello aaa')
// })
// app.listen(3000,function(){
// 	console.log('running on port 3000...please visit localhost:3000')
// })
//跟数据库链接
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-api');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('success')
	var userName = mongoose.Schema({
    name: String,
		age:Number,
    key:String
	})
	// var person = mongoose.model('person', userName);
	// var zhang = new person({name:'zhangm',age:15,key:'123456'})
	// zhang.save();
	var Cat = mongoose.model('cats', userName);
	var kitty = new Cat({name:'kitty',age:1,key:'123456'})
  kitty.age=2;
	kitty.save();
	// var dog = mongoose.model('dogs', userName);
	// var lim = new dog({name:'lim',age:1,key:'1234567'})
	// lim.save();
	console.log(kitty.age)
  Cat.findById({ "_id" : "57ecbc3ccd055a0a3e5f49f3"},function(err,cat){
    cat.name = 'hahaoo'
    cat.save(function(err){
      console.log('更新')
      Cat.find().exec(function(err,cats){
        console.log(cats)//异步执行
      })
    });
    })
  })
  // Cat.findById({_id :"57ecc3f74834890b1a05a5ee"},function(err,cat){
  //   cat.remove(function(err){
  //     console.log('删除')
  //     Cat.find().exec(function(err,cats){
  //       console.log(cats)//异步执行
  //     })
  //   });
  //   })
  // })
  console.log('我先')
//   var resule = cat.find();
//   cat.find().exec(function(err,cats){
//     console.log(cats)//异步执行
//   })
// });
