var express =require('express');
var router = express.Router();
var fs= require('fs');
var passport= require('passport');
var localStrategy =require('passport-local').Strategy;


router.use(passport.initialize());





router.route('/')
  .get(function (req, res) {
    return res.render('/');
  })
  .post(function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      if (err) {
        return next(err); // will generate a 500 error
      }
      if (!user) {
        return res.status(409).render('pages/login', {errMsg: info.errMsg});
      }
      req.login(user, function(err){
        if(err){
          console.error(err);
          return next(err);
        }
        return res.redirect('/dashboard');
      });
    })(req, res, next);
  });


  fs.readFile('./userlist.json',function(err,content){
    if(err) throw err;
    if(!content.length){res.send('user database is empty');}
   var parseData =content;
  passport.use(new localStrategy(function(username,password,done){
var username=req.body.username;
var password=req.body.password;

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
    }));
  });





module.exports = router;
