const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MSG = process.env.MSG || 'Message not configured';
const ENV = process.env.ENV || 'Environment not configured';

app.get('/presentation', (req, res) => {
  res.send(`${MSG} - ${ENV}`);
});

// This endpoint contains a small error that students must correct.
app.get('/correction', (req, res) => {
  res.send('Correction endpoint is working');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
