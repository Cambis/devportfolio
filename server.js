var express = require('express');
var app = express();
// var bodyParser = require('body-parser');

app.use(express.static('./'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.listen(process.env.PORT || 5000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
