const db = require('../config/db');
const predictClassification = require('../services/inferenceService');


exports.hewan = async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    } 
    const model = req.app.get('model');
    const { confidenceScore, label, id } = await predictClassification(model, file.buffer);
    
    const [hewan] = await db.execute('SELECT * FROM hewan WHERE id = ?', [id]);
    if (hewan.length === 0) {
      return res.status(400).json({ error: true, message: 'Invalid credentials' });
    }

    res.send({ 
      error: false,
      message: 'Animal get successful',
      confidenceScore: confidenceScore,
      label: label,
      AnimalResult: {Id: hewan[0].id,
        nama: hewan[0].nama_hewan,
        linkFoto: hewan[0].link_foto,
        linkFoto2: hewan[0].link_foto2,
        penjelasan: hewan[0].penjelasan
      } 
    });

  } catch (err) {
    console.error('Error during get animal:', err);
    res.status(500).send({ error: true, message: 'Server error' });
  }
}
