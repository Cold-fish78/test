module.exports.home = function(req,res){
    return res.render('index',{title : "this is title of the page"});
}