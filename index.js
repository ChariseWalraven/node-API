var app = require('express')(),
  port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res
  	.json({ 
  		data: 'Working condition' 
  	});
});

app.get("/happy", function(req, res) {
  res
  	.send(":)");
})

app.listen(port, console.log('App is running on port ' + port));