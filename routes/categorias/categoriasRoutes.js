import { Router } from 'express';

import {
    allController,
    findController,
    createController,
    updateController,
    deleteController

} from '../../controllers/categorias/categoriaController.js';

const categoriasRouter = Router();

// proteger todas las rutas de este archivo
// notasrouter.use(verifyToken);

// rutas para la entidad de notas 
categoriasRouter.get('/', allController);
categoriasRouter.get('/:id', findController);
categoriasRouter.post('/', createController);
categoriasRouter.put('/:id', updateController);
categoriasRouter.delete('/:id', deleteController);

export default categoriasRouter;