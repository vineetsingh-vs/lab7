const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/validate-user', (req, res) => {
  const user = {
    username: 'testUser',
    password: 'password123'
  };

  const { username, password } = req.query;

  if (username === user.username && password === user.password) {
    res.json({ success: true, message: 'User is valid' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
