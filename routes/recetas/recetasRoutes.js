import { Router } from 'express';

import {
    allController,
    findController,
    createController,
    updateController,
    deleteController

} from '../../controllers/recetas/recetaController.js';

const recetasRouter = Router();

// proteger todas las rutas de este archivo
// notasrouter.use(verifyToken);

// rutas para la entidad de notas 
recetasRouter.get('/', allController);
recetasRouter.get('/:id', findController);
recetasRouter.post('/', createController);
recetasRouter.put('/:id', updateController);
recetasRouter.delete('/:id', deleteController);

export default recetasRouter;