// server.js
// where your node app starts

// init project
var express = require('express'),
    mongoModel = require('./model.js'),
    bodyParser = require('body-parser'),
    form = require('express-form'),
    field = form.field
    
var app = express();


app.use(bodyParser());



// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
})
app.get("/songs", function (request, response) {
  mongoModel.find('songs',
    function(data) {
      response.send(data);
    }
  );
});

app.delete("/songs/:id", function(request, response){
  var id = request.params.id;
  console.log('Deleting song: '+ id)
  mongoModel.delete('songs', id, function(data){
    console.log('deleted ' + id + ':'+ data)
  });
})
app.post("/songs",
  form(
    field("artist").trim().required(),
    field("song").trim().required()
   ),
  function(request, response){
    if (!request.form.isValid) {
       // Handle errors 
       console.log(request.form.errors);
 
     } else {
       // Or, use filtered form data from the form object: 
       console.log("artist:", request.form.artist);
       console.log("song:", request.form.song);
       mongoModel.save('songs',
        {
          'artist' : request.form.artist, 
          'song' : request.form.song
        },
        function(data){
          response.send(data.ops[0]);
        }
       )

     }
  
  }
)

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});