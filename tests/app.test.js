const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app'); // Pastikan jalur ini benar

beforeAll(async () => {
  const url = process.env.MONGODB_URI;
  console.log('MongoDB URI:', url); // Memastikan URL sudah didefinisikan
  if (!url) {
    throw new Error('MONGODB_URI is not defined');
  }
  await mongoose.connect(url);
});



afterAll(async () => {
  await mongoose.connection.close();
});

describe('Example Test Suite', () => {
  it('should return 200 OK for GET /', async () => {
    const response = await request(app).get('/'); // Pastikan app di sini adalah instance yang benar
    expect(response.status).toBe(200);
  });
});
