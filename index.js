const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Frontend çalışıyor!');
});

app.listen(PORT, () => {
  console.log(`Frontend http://localhost:${PORT} üzerinde çalışıyor`);
});

