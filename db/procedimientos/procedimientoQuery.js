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
 * carga la lista de Procedimientos
 */
const queryAll =() => {
    //si la consulta no genera error,entonces cumple la promesa con el resultado
    // sihay algun error entonses rechaza la consulta he informa la razon
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM procedimientos ', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};
/**
 * Buscar un Procedimiento por su ID (llave primaria)
 */
const queryFind =(id) => {
    return new promise ((resolve, reject) => {
        config.query('SELECT * FROM procedimientos WHERE id = ? LIMIT 1', [id], (err , filas) => {
            respuesta(err, filas, resolve, reject);
        });
    } );
};
/**
 * Guardar un nuevo Procedimiento
 */ 
const queryCreate = async (procedimientos) => {
    const { nombre } = procedimientos;
    return new promise((resolve, reject) => {
        const sql = 'INSERT INTO procedimientos ( nombre ) VALUES (?)';
        config.query(sql, [ nombre ], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

 // Actualizar un Procedimiento por su ID
 
const queryUpdate= (id, procedimientos) => {
    const { nombre } = procedimientos;
    return new promise((resolve, reject) => {
        const sql = 'UPDATE procedimientos SET nombre = ?, WHERE id = ?';
        config.query(sql, [nombre, id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};
/**
 * Eliminar un Procedimiento por su ID
 */
const queryDelete= (id) => {
    return new promise((resolve, reject) => {
        const sql = 'DELETE FROM procedimientos WHERE id = ?';
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

