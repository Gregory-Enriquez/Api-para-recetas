import { Router } from 'express';

import {
    allController,
    findController,
    createController,
    updateController,
    deleteController

} from '../../controllers/procedimientos/procedimientoController.js';

const procedimientosRouter = Router();

// proteger todas las rutas de este archivo
// notasrouter.use(verifyToken);

// rutas para la entidad de notas 
procedimientosRouter.get('/', allController);
procedimientosRouter.get('/:id', findController);
procedimientosRouter.post('/', createController);
procedimientosRouter.put('/:id', updateController);
procedimientosRouter.delete('/:id', deleteController);

export default procedimientosRouter;