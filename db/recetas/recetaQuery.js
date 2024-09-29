import config  from '../../config.js';

//funcion que ayuda a manejar las respuestas de la base de datos
const respuesta = (err, result, resolve, reject) => {
    if(err) {
        console.log(err);
        reject(err);
    }else{
        resolve(result);
    }
};
/**
 * carga la lista de Recetas
 */
const queryAll =() => {
    //si la consulta no genera error,entonces cumple la promesa con el resultado
    // sihay algun error entonses rechaza la consulta he informa la razon
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM recetas ', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};
/**
 * Buscar una Receta por su ID (llave primaria)
 */
const queryFind =(id) => {
    return new promise ((resolve, reject) => {
        config.query('SELECT * FROM recetas WHERE id = ? LIMIT 1', [id], (err , filas) => {
            respuesta(err, filas, resolve, reject);
        });
    } );
};
/**
 * Guardar una nueva Receta
 */ 
const queryCreate = async (recetas) => {
    const { nombre, descripcion } = recetas;
    return new promise((resolve, reject) => {
        const sql = 'INSERT INTO recetas ( nombre, descripcion ) VALUES (?, ?)';
        config.query(sql, [ nombre, descripcion ], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};
/**
 * Actualizar una Receta por su ID
 */
const queryUpdate= (id, recetas) => {
    const { nombre } = recetas;
    return new promise((resolve, reject) => {
        const sql = 'UPDATE recetas SET nombre = ?, WHERE id = ?';
        config.query(sql, [nombre, id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};
/**
 * Eliminar una Receta por su ID
 */
const queryDelete= (id) => {
    return new promise((resolve, reject) => {
        const sql = 'DELETE FROM recetas WHERE id = ?';
        config.query(sql, [id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};
/**
 * Exportar todas las funciones defidas en este archivo
 */
export {
    queryAll,
 queryFind,
 queryCreate,
 queryUpdate,
 queryDelete
}