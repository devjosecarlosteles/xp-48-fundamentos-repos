import { Router } from 'express';
import { createUser, deleteUserById, findAllUsers, findOneUserById, login, updateUserById } from '../controllers/users/users.controller.js';
import verifyFieldName from '../middlewares/verify-field-name.middleware.js';
import verifyPassword from '../middlewares/verify-password.middleware.js';
import auth from '../middlewares/auth.middleware.js';
import verifyEmailAlreadyExists from '../middlewares/verify-email-already-exists.middleware.js';
import { findAllUsersAdmin, loginAdmin } from '../controllers/admin/admin.controller.js';
import validateUpdateMiddleware from '../middlewares/validate-update.middleware.js';
import NotificationsController from '../controllers/notifications/notifications.controller.js';

const routes = Router()

routes.get('/users', auth, findAllUsers);
routes.get('/users/:id', auth, findOneUserById)

routes.put('/users', auth, validateUpdateMiddleware, updateUserById)
routes.delete('/users', auth, deleteUserById)

routes.post('/login', login)
routes.post('/users', verifyEmailAlreadyExists, verifyFieldName, verifyPassword, createUser);

routes.post('/login/admin', loginAdmin)
routes.get('/admin/users', auth, findAllUsersAdmin)

const notificationsController = new NotificationsController();

routes.get('/notifications', notificationsController.findAll)

export default routes;