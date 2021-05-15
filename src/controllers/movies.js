import Movies from '../models/movie';
import {v1} from 'uuid'

export const getAll = async () => {
  try {
    return await Movies.find();
  } catch (err) {
    throw new Error(`getAll Err: ${err}`);
  }
};

export const getById = async (id) => {
  try {
    const movies = await getAll();
    return movies.find((x) => x.id === id);
  } catch (err) {
    throw new Error(`getById Err: ${err}`);
  }
};

export const createMovie = async (data) => {
  try {
    const movie = {
      id: v1(),
      name: data.name,
      description: data.description,
      rating: data.rating,
      genre: data.genre,
      videoId: data.videoId,
      imageUrl: data.imageUrl,
      imageUrl2: data.imageUrl2,
      imageUrl3: data.imageUrl3,
      date: data.date,
      director: data.director,
      cast: data.cast,
      tagline: data.tagline
    };
    return await Movies.create(movie);
  } catch (err) {
    throw new Error(`createMovie Err: ${err}`);
  }
};



