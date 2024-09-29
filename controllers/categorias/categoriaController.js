import {
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete

} from"../../db/categorias/categoriaQuery.js";

/**
 * obtener todas las categorias de la base de datos
 */
const allController = async ( req, res) => {
    // try-catch serve para validar si la peticion se obtiene o se devuelve un error
    // try - insertar
    // catch - captura el error
    try{
        //ejecuta la consulta en la base de datos
        const categorias = await queryAll();
        res.json(categorias);
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
        const categoria = await queryFind(req.params.id);
        res.json(categoria);
    }catch (error) {
        res.status(500).send(error);

    }

};
/**
 * crear una categoria
 */
const createController = async (req, res)=>{
    try {
        const resultado = await queryCreate(req.body);
        res.json({mensaje:'Categoria creada con exito', id : resultado.inserId});
    } catch (error) {
        res.status(500).send(error);

    }

};

/**
 * Actualizar los datos de una Categoria
 *
 */
const updateController = async (req, res)=>{
    try {
        const resultado = await queryUpdate(req.params.id, req.body);
        if(resultado.affectedRows > 0 ){
            res.json({mensaje:'Categoria actualizada con exito', categoria: resultado});
        } else{
            res.status(404).json({mensaje: 'Categoria no encontrada'});
        }
       
    } catch (error) {
        res.status(500).send(error);

    }

};
/**
 * Eliminar una categoria
 *
 */
const deleteController = async (req, res)=>{
    try {
        const resultado = await queryDelete(req.params.id);
        if(resultado.affectedRows > 0 ){
            res.json({mensaje:'Categoria eliminada con exito'});
        } else{
            res.status(404).json({mensaje: 'Categoria no encontrada'});
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