// index.js veya server.js dosyanızda:
const express = require('express');
const path = require('path');

const app = express();

// (API route'larınız veya diğer middleware'ler burada olabilir)

// Production ortamında, React'in build edilmiş statik dosyalarını servis etmek için:
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// Tüm GET isteklerini, tanımlı rota bulunamadığında, React'in index.html dosyası ile yönlendirir:
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

// (Gerekirse, PORT veya diğer ayarlar burada belirlenir)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
