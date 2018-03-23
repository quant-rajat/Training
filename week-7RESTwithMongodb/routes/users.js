var express = require('express');
var router = express.Router();
var mongodb=require('../services/connection.js');





        router.get('/listUsers',function(req,res,next){
           mongodb.viewDocuments();

    });



router.post('/addUser',function(req, res, next){

var userinfo={
      "username" : req.body.fname,
      "password": req.body.password
  };
mongodb.addUser(userinfo);
  res.send(JSON.stringify(userinfo));

});





router.delete('/deleteUser',function(req,res){
    var userinfo={
        "username" : req.body.fname,
        "password": req.body.password
    };
    mongodb.removeUser(userinfo.username,userinfo.password);
 });






/* router.get('/listUsers',function(req,res,next){
     createConnection(url,())
     var cursor =db.collection('Userlist').find().toArray((err,results)=>{
         for(doc of results){
             console.log(doc);
         }
     });

   });*/







 router.put('/updateUser',function(req,res,next){

     var userinfo={
         "username" : req.body.fname,
         "password": req.body.password,
         "newname": req.body.newname
     };
     mongodb.updateUser(userinfo.username,userinfo.password,userinfo.newname);
 });








 module.exports = router;