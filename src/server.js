import app from './app';
import DB from './utils/db_conn';

const start = async () => {
  await DB();
  const port = 4444;

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
  });
};

(async () => {
  await start();
})();
