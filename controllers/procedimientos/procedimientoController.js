import {
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete

} from"../../db/procedimientos/procedimientoQuery.js";

/**
 * obtener todas las categorias de la base de datos
 */
const allController = async ( req, res) => {
    // try-catch serve para validar si la peticion se obtiene o se devuelve un error
    // try - insertar
    // catch - captura el error
    try{
        //ejecuta la consulta en la base de datos
        const procedimiento = await queryAll();
        res.json(procedimiento);
    }catch (error) {
        res.status(500).send(error);

    }
};
/**
 * obtener tarea con el id especificado en la query / url
 * @param{*} req
 * @param{*} res
 */
const findController = async (req, res)=>{
    try{
        //ejecuta la consulta en la base de datos
        const procedimiento = await queryFind(req.params.id);
        res.json(procedimiento);
    }catch (error) {
        res.status(500).send(error);

    }

};
/**
 * crear un Procedimiento
 */
const createController = async (req, res)=>{
    try {
        const resultado = await queryCreate(req.body);
        res.json({mensaje:'Procedimiento creado con exito', id : resultado.inserId});
    } catch (error) {
        res.status(500).send(error);

    }

};

/**
 * Actualizar los datos de un Procedimiento
 *
 */
const updateController = async (req, res)=>{
    try {
        const resultado = await queryUpdate(req.params.id, req.body);
        if(resultado.affectedRows > 0 ){
            res.json({mensaje:'Procedimiento actualizado con exito', procedimiento: resultado});
        } else{
            res.status(404).json({mensaje: 'Procedimiento no encontrada'});
        }
       
    } catch (error) {
        res.status(500).send(error);

    }

};
/**
 * Eliminar un Procedimiento
 *
 */
const deleteController = async (req, res)=>{
    try {
        const resultado = await queryDelete(req.params.id);
        if(resultado.affectedRows > 0 ){
            res.json({mensaje:'Procedimiento eliminado con exito'});
        } else{
            res.status(404).json({mensaje: 'Procedimiento no encontrado'});
        }
       
    } catch (error) {
        res.status(500).send(error);

    }

};

export {
allController,
findController,
createController,
updateController,
deleteController,
};