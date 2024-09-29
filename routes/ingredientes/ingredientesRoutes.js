import { Router } from 'express';

import {
    allController,
    findController,
    createController,
    updateController,
    deleteController

} from '../../controllers/ingredientes/ingrediente.controller.js';

const ingredientesRouter = Router();

// proteger todas las rutas de este archivo
// notasrouter.use(verifyToken);

// rutas para la entidad de notas 
ingredientesRouter.get('/', allController);
ingredientesRouter.get('/:id', findController);
ingredientesRouter.post('/', createController);
ingredientesRouter.put('/:id', updateController);
ingredientesRouter.delete('/:id', deleteController);

export default ingredientesRouter;