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
- Pada `fileFilter` ada beberapa file yang hanya diterima seperti `/jpeg|jpg|png|gif|bmp/`
- `upload.single('image')` menandakan bahwa middleware ini hanya menangani satu file dengan format yang sudah ditentukan.
- 
 
  ## auth.js
  - ```router.post``` untuk endpoint sebuah rute
  - ```get-data``` untuk endpoint setelah api untuk deploy
  -  ```modelMiddleware```  Middleware untuk memproses model. Middleware ini akan dieksekusi sebelum handler 
  -   ``modelController.hewan``  Handler untuk mengambil data hewan

  ## inferenceService.js
  - pada ``` tensor = tf.node.decodeImage(imageBuffer, 3) ``` di try berguna untuk mengubah buffer gambar menjadi tensor tensor flow. Jika berhasil gambar akan diubah ukuran ukuran menjadi 240 x 240 dengan `.resizeNearestNeighbor([240, 240])` setelahnya akan di expand dimensi dengan `.expandDims()`
  - Setelah itu, nilai-nilai dalam tensor dikonversi ke float menggunakan .toFloat() dan dinormalisasi dengan membaginya dengan skalar 255.0 menggunakan `.div(tf.scalar(255.0))`.
  - `const prediction = model.predict(tensor);` memakai model yang diberikan untuk diprediksi dengan tensor yang diberi pada proses sebelumnya
  - Setelahnya akan ada hasil prediksi `score` dan akan dikembalikan skor.
  - Di definisikan class yang tersedia, pada dataset terdapat 90 class dan harus sama persis nama dengan outputnya.
  - Untuk ` if (label === 'antelope') {
        id = 1;}`
    - `label` disesuaikan dengan nama hewan yang ada. Serta `id` untuk dicocokan dengan id database pada database `nama_hewan`
 
  ## loadModel.js
  - Pada model dari Machine Learning menggunakan Graph tidak menggunakan Layer yang didapatkan dari Machine Learning.

    ## 
