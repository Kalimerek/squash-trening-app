const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Exercise = require('./models/Exercise');

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint do pobierania ćwiczeń
app.get('/api/exercises', async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
});

// Endpoint do dodawania ćwiczeń
app.post('/api/exercises', async (req, res) => {
  const newExercise = new Exercise(req.body);
  await newExercise.save();
  res.status(201).json(newExercise);
});

app.get('/', (req, res) => {
  res.send('API działa!');
});

const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Połączono z MongoDB');
    app.listen(PORT, () => {
      console.log(`Serwer działa na porcie ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
