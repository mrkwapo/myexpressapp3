const express = require('express')
const bodyParser = require('body-parser');
const keys = require('./keys.js');
const User = require('./models/User.js');
const app = express();
const port = 8080;


//connecting mongodb using mongoose
const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBUrl, { useNewUrlParser: true }).then(() => console.log("DB COnnected"));

app.use(bodyParser.json());
app.use('/', express.static("public"));

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.post('/api', function(req, res) {
  const userName = req.body.username;
  const message = req.body.message;

  const data = {
    username: userName,
    message: message
  }

  console.log(data);

//this is an instance where a new user is being created
  const user = new User(data)
  user.save().then(() => {
    console.log("new user created");
      res.send(data);
  })

})

app.get("/getallusers", function(req, res) {
  res.send("data")
})



app.get("/showprofile/:username", function(req, res) {
  const user = req.params.username;
  console.log(user);

  res.send("show profile working");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
