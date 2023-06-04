
import express from 'express';
import  {getAllUser, login, signup,protectedRoute}  from '../controllers/user-controller.js';
import jwtMiddleware from '../middleware/jwtMiddleware.js';
const UserRouter = express.Router();

//UserRouter.get('/',getAllUser);
UserRouter.post('/signup',signup);
UserRouter.post('/login',login);
UserRouter.get('/protected', protectedRoute);
export default UserRouter;