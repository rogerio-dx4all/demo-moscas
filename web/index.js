const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ 
    extended: true
}));


app.use(express.static(__dirname+"/views"));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//process.env.PORT
const listener = app.listen(80, function() {
    console.log('Your app is listening on port ' + listener.address().port);
  });