# Backend API
The function of this API is to send prediction results from user uploads which are sent to the APP engine and after that they will be processed by the Backend which accesses the model in the Cloud Storage Bucket. After that, the results are compared with the database. However, the Database cannot save the image and it ends up being retrieved from the new Cloud Storage Bucket. After matching, the Database results will be sent to the APP engine again and then, the final results will be sent back from the APP engine to the user again with the Results from the Database.
- `"@google-cloud/storage": "^7.11.1"`
  - This package provides Node.js to interact with the Google Cloud Storage storage service. this package, developers can manage buckets and objects in Google Cloud Storage, such as uploading, downloading, deleting and managing objects.
- `"@tensorflow/tfjs": "^4.20.0"` `"@tensorflow/tfjs-node": "^4.20.0"`
  - Machine learning libraries in JavaScript. This package is used to build and train models provided by machine learning
- `"axios": "^1.7.2"`,
  - HTTP client library for Node.js and browsers that offers a simple and easy-to-use interface for making HTTP requests to the server. Retrieves data from external APIs, sends POST requests with JSON data, and handles responses from the server. 
- `"dotenv": "^16.4.5"`,
  - Pada file `.env` ini membantu menyimpan konvigurasi aplikasi, database dan API untuk model JSON
    ```DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=
        DB_NAME=nama_hewan
        PORT=3306
        MODEL_URL=https://storage.googleapis.com/json-new-ivan/model-in-prod/model.json
- `"express": "^4.19.2"`
  - minimalist web for Node.js that provides various features to easily build web applications and RESTful APIs. This simplifies the handling of routes, HTTP requests, and server responses
- `"express-validator": "^7.1.0"`
  - This middleware enables data input validation of HTTP requests in Express applications. Helps in checking, cleaning and validating data before processing it further.
- `"multer": "^1.4.5-lts.1"`
  - middleware for Express which is useful for uploading image, video or document files uploaded in web applications.
- `"mysql2": "^3.9.9"`
  -   MySQL2 is a MySQL client library for Node.js that uses the concept of promises to manage connections and query execution with efficiency.
