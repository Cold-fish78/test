const User = require('')
module.exports.signIn = function(req,res){
    return res.render('SignIn',{ title : "user login"});
}
module.exports.createUser = function(req,res){

}