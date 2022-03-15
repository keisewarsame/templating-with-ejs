const express = require('express');
const app = express();
const port = 3000;

//here is our test data
var data = require('./data/test.json');

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

//add users route
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});


app.listen(port, () => {
  console.log('Example app listening on port ${port}');
  console.log(data);
});