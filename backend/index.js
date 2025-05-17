const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Mongo bağlantısı
mongoose.connect('mongodb://mongodb:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB bağlantısı başarılı'))
  .catch(err => console.error('❌ Mongo bağlantı hatası:', err));

app.get('/api', (req, res) => {
  res.send('API aktif! 🟢');
});

app.listen(PORT, () => {
  console.log(`Backend çalışıyor → http://localhost:${PORT}`);
});
