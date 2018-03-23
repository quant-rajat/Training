var express =require('express');
var router = express.Router();
var fs= require('fs');
var passport= require('passport');
var localStrategy =require('passport-local').Strategy;




  passport.use(new localStrategy(function(username,password,done){
var username=req.body.username;
var password=req.body.password;

  fs.readFile('./userlist.json',function(err,content){
  if(err) throw err;
  if(!content.length){res.send('user database is empty');}
  var parseData =JSON.parse(content);

      parseData.Users.findOne({username: username},function (err, user) {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    });
  }));

  module.exports=passport;
