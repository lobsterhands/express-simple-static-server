const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res) => {
  let users = [
    {
      firstName: "Lyle",
      lastName: "Denman",
      age: 31,
      gender: "male"
    },
    {
      firstName: "Apple",
      lastName: "Bottom",
      age: 37,
      gender: "female"
    }
  ];

  res.json(users);
});

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'downloads/please.pdf'));
});

app.get('/about', (req, res) => {
  res.redirect('/about.html');
});

app.post('/subscribe', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;

  console.log(name + ' has subscribed with ' + email);

  res.json({
    name: name,
    email: email
  })
});

app.listen(3001, () => {
  console.log('listening on localhost:3001...');
})
