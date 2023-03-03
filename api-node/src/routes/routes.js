import { Router } from 'express';
import { createUser, deleteUserById, findAllUsers, findOneUserById, updateUserById } from '../controllers/users/users.controller.js';

const routes = Router()

routes.get('/users', findAllUsers);
routes.get('/users/:id', findOneUserById)

routes.post('/users', createUser);

routes.put('/users', updateUserById)
routes.delete('/users', deleteUserById)

export default routes;