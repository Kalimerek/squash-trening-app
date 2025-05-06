require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const ExerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  skills: [String],
  shots: [String],
  people: [Number]
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/exercises', async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
});

app.post('/exercises', async (req, res) => {
  const newExercise = new Exercise(req.body);
  await newExercise.save();
  res.status(201).json(newExercise);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
