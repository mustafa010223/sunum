const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URL || 'mongodb://mongodb:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB bağlantısı başarılı'))
  .catch(err => console.error('❌ Mongo bağlantı hatası:', err));

const NoteSchema = new mongoose.Schema({ text: String });
const Note = mongoose.model('Note', NoteSchema);

// ✅ Sağlık kontrolü için ekledik
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend sağlıklı ✅' });
});

app.get('/api', (req, res) => res.send('API aktif! 🟢'));

app.post('/add', async (req, res) => {
  const { text } = req.body;
  const note = new Note({ text: text || 'Deneme Verisi' });
  await note.save();
  res.send('✅ MongoDB’ye veri eklendi');
});

app.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`Backend çalışıyor → http://localhost:${PORT}`);
});

