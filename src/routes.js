import { Router } from "express";
import { route } from 'express/lib/router';

import helloController from "./controllers/helloController";
import UsersController from "./controllers/UsersController";

const routes = new Router();

routes.get('/hello', helloController.index);

// RESTfull
routes.get('/users', UsersController.index);    
routes.get('/users/:id', UsersController.read); 
routes.post('/users', UsersController.create);    
routes.put('/users/:id', UsersController.update); 
routes.delete('/users/:id', UsersController.delete);    

export default routes;