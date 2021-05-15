import express from 'express';
import {
  getAll,
  getById,
  createMovie
} from '../controllers/movies';

const router = new express.Router();

router.get('/', async (req, res) => {
  try {
    const movies = await getAll();
    res.json(movies);
  } catch (err) {
    logger.error(err);
    res.status(500).send({ message: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const movies = await getById(req.params.id);
    console.log('movies',movies);
    res.json(movies);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

router.post('/create', async (req, res) => {
  try {
    console.log('req',req.body);
    if (await createMovie(req.body)) {
      res.json({ status: 'ok' });
    } else {
      res.status(400).send({ message: `Not Created ` });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

export default router;
