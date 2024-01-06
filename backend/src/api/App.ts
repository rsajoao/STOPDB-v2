import express from 'express';
import cors from 'cors';
// import ErrorHandler from '../database/middlewares/ErrorHandler';
import routers from '../database/routers';
import associateModels from '../database/models/Associates';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.app.get('/', (_req, res) => res.json({ ok: true }));
    associateModels();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH',
      );
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(routers);
    this.app.use(
      cors({
        exposedHeaders: ['X-User-Token'],
      }),
    );
    // this.app.use(ErrorHandler.handler);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () =>
      console.log(`Server listening on port ${PORT}`),
    );
  }
}

export { App };
