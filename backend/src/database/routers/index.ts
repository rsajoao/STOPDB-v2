import { Router } from 'express';
import UserRouter from './UserRouter';
import AuthRouter from './AuthRouter';

const routers = Router();

routers.use('/user', UserRouter);
routers.use('/auth', AuthRouter);

export default routers;
