require('dotenv').config(); // Memuat variabel dari file .env

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Rute contoh
app.get('/', (req, res) => {
  res.status(200).send('OK');
});

// Fungsi untuk menghubungkan ke database
async function connectToDatabase() {
  try {
    const url = process.env.MONGODB_URI; // Mengambil URL dari variabel lingkungan
    if (!url) {
      throw new Error('MONGODB_URI is not defined'); // Memeriksa apakah MONGODB_URI terdefinisi
    }
    await mongoose.connect(url); // Menghubungkan ke MongoDB
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error); // Menangkap dan mencetak kesalahan jika koneksi gagal
  }
}

// Memanggil fungsi untuk menghubungkan ke database
connectToDatabase();

// Ekspor aplikasi untuk digunakan dalam tes
module.exports = app;
