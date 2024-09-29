import {
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete

} from"../../db/ingredientes/ingredienteQuery.js";

/**
 * obtener todas las categorias de la base de datos
 */
const allController = async ( req, res) => {
    // try-catch serve para validar si la peticion se obtiene o se devuelve un error
    // try - insertar
    // catch - captura el error
    try{
        //ejecuta la consulta en la base de datos
        const ingrediente = await queryAll();
        res.json(ingrediente);
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
        const ingrediente = await queryFind(req.params.id);
        res.json(ingrediente);
    }catch (error) {
        res.status(500).send(error);

    }

};
/**
 * crear un Ingrediente
 */
const createController = async (req, res)=>{
    try {
        const resultado = await queryCreate(req.body);
        res.json({mensaje:'Ingrediente creado con exito', id : resultado.inserId});
    } catch (error) {
        res.status(500).send(error);

    }

};

/**
 * Actualizar los datos de una Ingrediente
 *
 */
const updateController = async (req, res)=>{
    try {
        const resultado = await queryUpdate(req.params.id, req.body);
        if(resultado.affectedRows > 0 ){
            res.json({mensaje:'Ingrediente actualizado con exito', ingrediente: resultado});
        } else{
            res.status(404).json({mensaje: 'Ingrediente no encontrada'});
        }
       
    } catch (error) {
        res.status(500).send(error);

    }

};
/**
 * Eliminar una Ingrediente
 *
 */
const deleteController = async (req, res)=>{
    try {
        const resultado = await queryDelete(req.params.id);
        if(resultado.affectedRows > 0 ){
            res.json({mensaje:'Ingrediente eliminado con exito'});
        } else{
            res.status(404).json({mensaje: 'Ingrediente no encontrado'});
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