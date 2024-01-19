import { Router } from 'express';
import UserRouter from './UserRouter';
import AuthRouter from './AuthRouter';
import ThemeRouter from './ThemeRouter';
import CategoryRouter from './CategoryRouter';
import AnswerRouter from './AnswerRouter';

const routers = Router();

routers.use('/user', UserRouter);
routers.use('/auth', AuthRouter);
routers.use('/theme', ThemeRouter);
routers.use('/category', CategoryRouter);
routers.use('/answer', AnswerRouter);

export default routers;
