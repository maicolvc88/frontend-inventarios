import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos los estados
 */
const obtenerEstados = (estado = true) => {
    return axiosConfig.get('estados?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Crea estados
 */
const crearEstado = (data) => {
    return axiosConfig.post('estados', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualiza estados por ID
 */
const editarEstadosID = (tipoId, data) => {
    return axiosConfig.put('estados/'+tipoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra una estados por ID
 */
 const borrarEstadosID = (tipoId) => {
    return axiosConfig.delete('estados/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta una estados por ID
 */
 const obtenerEstadosID = (tipoId) => {
    return axiosConfig.get('estados/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerEstados,
    crearEstado,
    editarEstadosID,
    borrarEstadosID,
    obtenerEstadosID
}