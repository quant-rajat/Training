var express = require('express');
var router = express.Router();
var fs= require('fs');
var passport= require('passport');
var localStrategy =require('passport-local').Strategy;

/*    POST  adding user   */
router.post('/addUser',function(req, res,next){
var data=  fs.readFileSync('./userlist.json');
  var userinfo={
      "username" : req.body.fname,
      "password": req.body.password
  }
  var arrayOfObject =JSON.parse(data);
  arrayOfObject.Users.push(userinfo);
  fs.writeFile('./userlist.json',JSON.stringify(arrayOfObject));
  res.send(JSON.stringify(userinfo));
});



/* DELETE User deletion*/
router.delete('/deleteUser',function(req,res){
  var data = fs.readFileSync('./userlist.json');
  var arrayOb=JSON.parse(data);

  for(var x=0;x<arrayOb.Users.length;x++){
   if(req.body.fname==arrayOb.Users[x].name){
   if(req.body.password==arrayOb.Users[x].password){
     arrayOb.Users.splice(x,1);
     res.send('successfully deleted');
          }
        }

  }
   fs.writeFile('./userlist.json',JSON.stringify(arrayOb));
 });




 /*GET  listing existing users */

 router.get('/listUsers',function(req,res,next){
   fs.readFile('./userlist.json',function(err,content){
     if(err) throw err;
     if(!content.length){res.send('user database is empty');}
   //  var parseJson = JSON.parse(content);
     res.send(JSON.parse(content));

   });
 });




 /*PUT updating users credentials*/

 router.put('/updateUser',function(req,res,next){
console.log('1');
   var data = fs.readFileSync('./userlist.json');
   var userinfo={
       "name" : req.body.fname,
       "password": req.body.newpassword
   }
   console.log('2');
   var arrayOb=JSON.parse(data);
 // var x=0;
 console.log('3');
     let x=0;
     while(x<arrayOb.Users.length){
    if(req.body.fname==arrayOb.Users[x].name){
      console.log('4');
    if(req.body.currentpassword==arrayOb.Users[x].password){
      console.log('5');
      arrayOb.Users.splice(x,1,userinfo);
      res.send('successfully updated...');
      break;
        }
      }
        x++;
    }

    fs.writeFile('./userlist.json',JSON.stringify(arrayOb));
  // res.send(arrayOb.Users);
 });





/*  POST Login check*/

passport.use(new localStrategy(function(username,password,done){

  var data = fs.readFileSync('./userlist.json');
  /*var user={
      "username" : username,
      "password": password
   }*/
  var arrayOb=JSON.parse(data);
  console.log(arrayOb);
let x=0;
let flag=false;
console.log(arrayOb.Users.length);
  while(x<arrayOb.Users.length){

      if(username==arrayOb.Users[x].username){

          if(password==arrayOb.Users[x].password)
          {
            flag=true;
              console.log('inner loop');
            break;
          }
     }

   x++;
   }
   if(flag){
     console.log('flag is true');
     done(null,arrayOb.username);
   }else{
     return done(null,false);
   }

}));

router.post('/login',passport.authenticate('local',{session:false}),
(req,res,next)=>{
  successmessage:'welcome! you have been logged in successfully';

});



 module.exports = router;
