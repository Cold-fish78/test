const User = require('../models/user');

module.exports.signIn = function (req, res) {
  return res.render('SignIn', { title: "user login" });
}
module.exports.signUp = function (req, res) {
  console.log("inside userController sign up module");
  return res.render('signUp', { title: 'sign Up' });
}



module.exports.createUser = function (req, res) {
 
  if (req.body.password != req.body.confirmPassword) {
    return res.redirect('back');
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in creating user ...userContro11" + err);
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        console.log("creating user");
        if (err) { console.log("error in userContro16" + err); return }
        return res.redirect('/user/signIn');
      });

    } else {
      return res.redirect('/user/signIn');
    }

  });

 
}
module.exports.getUser = function (req, res) {
  console.log(req.body.email);
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in getUser module" + err);
    }
    console.log(user);
    if (user) {
    //     // 
    //     if(result === true){
    //       return res.render('profile', { title: 'this is user profile' })
    //   } else {
    //     console.log("Incorrct password");
    //    };
    // });
      if (user.password == req.body.password) {
        return res.render('profile', { title: 'this is user profile' })
      } else {
        console.log("Incorrct password");
      };
    }
    console.log("internal server error ");
  })




}
module.exports.contactUs = function(req,res){
  return res.render('contact',{title : "Contact us"});
}