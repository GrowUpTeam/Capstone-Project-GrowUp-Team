## modelController.js 
- Terdapat fungsi untuk mengambil hasil seperti hasil prediksi dengan 
``` const { confidenceScore, label, id } = await predictClassification(model, file.buffer);```. Terdapat pada predictClassification pada ```services/inferenceService.js```
- Pengambilan data pada ```const [hewan] = await db.execute('SELECT * FROM hewan WHERE id = ?', [id]);``` dari database
- Setelah pengambilan dari database berhasil maka respon yang dikirim hewan yang ditemukan disesuikan dengan apa yang ada dalah database seperti
  - id
  - nama
  - linkfoto
  - linkFoto2
  - penjelasan
- Terakhir jika eror akan keluar ```} catch (err) {
    // Tangani kesalahan jika terjadi
    console.error('Error during get animal:', err);
    res.status(500).send({ error: true, message: 'Server error' });
  }```

  ## modelController.js
  - ```multer``` untuk menangani upload sebuah file.
 
## modelMiddleware.js
- pada `fileFilter` ada beberapa file yang hanya diterima seperti `/jpeg|jpg|png|gif|bmp/`
 
  ## auth.js
  - ```router.post``` untuk endpoint sebuah rute
  - ```get-data``` untuk endpoint setelah api untuk deploy
  -  ```modelMiddleware```  Middleware untuk memproses model. Middleware ini akan dieksekusi sebelum handler 
  -   ``modelController.hewan``  Handler untuk mengambil data hewan

  ## inferenceService.js
  - pada ``` tensor = tf.node.decodeImage(imageBuffer, 3) ``` di try berguna untuk mengubah buffer gambar menjadi tensor tensor flow
  - Di try juga terdapat kebutuhan untuk ukuran gambar, menambah dimensi di depan untuk batch, mengubah nilai float serta normalisasi nilai pixel ke rentang [0,1]. Jika diluar format yang diberikan di ``modelMiddleware.js`` maka akan ditolak
  
