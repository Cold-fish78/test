const express = require('express');
const app = express();
const port = 8009;
app.use(express.urlencoded({extended : true}));

require("dotenv").config();
// for ejs no
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));
//  for routes;
// app.use('/',('./routes'));
app.use('/',require('./routes/index'));

app.listen(port, function (err) {
    if(err){
        console.log("error in running the server");

    }else{
        console.log("server running at port" + port);
    }
})