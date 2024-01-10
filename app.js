const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ayush7985',
  database: 'temp',
});

db.connect((err) => {
  if (err) {
    console.error('Failed to connect to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL');
});

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index', { user: req.session.user });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (results.length > 0) {
      req.session.user = username;
      res.redirect('/');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // You can save the contact form data to the database or handle it as needed
  // For simplicity, just print the data to the console
  console.log('Contact Form Submitted:', { name, email, message });

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
