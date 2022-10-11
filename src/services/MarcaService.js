import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos las marcas
 */
const obtenerMarcas = (estado = true) => {
    return axiosConfig.get('marcas?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Crea marcas
 */
const crearMarca = (data) => {
    return axiosConfig.post('marcas', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualiza marcas por ID
 */
const editarMarcasID = (tipoId, data) => {
    return axiosConfig.put('marcas/'+tipoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra una marca por ID
 */
 const borrarMarcasID = (tipoId) => {
    return axiosConfig.delete('marcas/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta una marca por ID
 */
 const obtenerMarcasID = (tipoId) => {
    return axiosConfig.get('marcas/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerMarcas,
    crearMarca,
    editarMarcasID,
    borrarMarcasID,
    obtenerMarcasID
}