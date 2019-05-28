const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const products = require('./api/products');

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
   extended: false
  })
);

app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected :)'))
  .catch(err => console.log(err));

  // Routes
app.use('/api/products', products);

// Serv static assets if in production
if (process.env.NODE_ENV === 'production'){
  //Set static folder
  app.use(express.static(path.join(__dirname, "client", "build")))

  app.get('*', (reg, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));