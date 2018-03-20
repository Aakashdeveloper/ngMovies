/***************Fecth data using mongodb where its is realted to model***********/
var express = require('express');
var mongodb = require('mongodb').MongoClient;

var app = express();

var port = process.env.PORT||2200; 
var commanRouter = express.Router();

commanRouter.route('/getMovies')
    .get(function(req,res){
    	var url ="mongodb://XXXXXXXXXXXXXXXX";
    	mongodb.connect(url, (err, db) => {
			  if (err) {
			    return console.log(err);
			  }
			  db.collection('movies').find({}).toArray(
            	function(err,data){
					if(err)
					   
					   res.status(500).send(err);
					else
						res.setHeader('Access-Control-Allow-Origin','*')
		    		    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
						res.json(data);
		})
		})
		
});
commanRouter.route('/gettest')
    .get(function(req,res){
    	console.log("hiiiiiiiiiiiii")
		
});
app.use('/api', commanRouter);

app.get('/',function(req,res){
	res.send("Working")
});
app.listen(port, function(){
	console.log("running");
});
