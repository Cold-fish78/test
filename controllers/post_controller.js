module.exports.blogpost = function(req,res){
    res.render('blogpost',{title : 'blogpost'})
}
module.exports.search = function(req,res){
    res.render('search',{title : 'search results'});
}