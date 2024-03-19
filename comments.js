// Create web server
// 1. Import express
const express = require('express');

// 2. Create web server
const app = express();

// 3. Add route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 4. Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// 5. Run server
// node comments.js
// http://localhost:3000
// http://localhost:3000/api/courses
// http://localhost:3000/api/posts/2018/1

// 6. Add route with parameters
app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});

// 7. Add route with query string parameters
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.query);
});
