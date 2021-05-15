import mongoose from 'mongoose';
  
const movieSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  rating: Number,
  genre: String,
  videoId: String,
  imageUrl: String,
  imageUrl2: String,
  imageUrl3: String,
  date: Number, 
  director: String,
  cast: String,
  tagline: String
});

const Movie = new mongoose.model('movies', movieSchema);

export default Movie;