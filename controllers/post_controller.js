module.exports.blogpost = function(req,res){
    res.render('blogpost',{title : 'AWS not accepting debit/credit card [solved]'})
}
module.exports.search = function(req,res){
    res.render('search',{title : 'search results'});
}