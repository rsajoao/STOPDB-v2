import { Router } from 'express';
import UserRouter from './UserRouter';

const routers = Router();

routers.use('/user', UserRouter);

export default routers;
