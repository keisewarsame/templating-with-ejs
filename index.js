const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'My Home Page';
  res.render('pages/index',{title:title});
});

app.get('/dogs', (req, res) => {
  var title = 'Dogs';
  res.render('pages/dogs',{title:title});
});

app.get('/cats', (req, res) => {
  var title = 'Cats';
  res.render('pages/cats',{title:title});
});

app.get('/rabbits', (req, res) => {
  var title = 'Rabbits';
  res.render('pages/rabbits',{title:title});
});


app.listen(port, () => {
  console.log('Example app listening on port ${port}');
});