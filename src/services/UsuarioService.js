import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos los usuarios
 */
const obtenerUsuarios = (estado = true) => {
    return axiosConfig.get('usuarios?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Crea usuarios
 */
const crearUsuario = (data) => {
    return axiosConfig.post('usuarios', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualiza usuarios por ID
 */
const editarUsuariosID = (tipoId, data) => {
    return axiosConfig.put('usuarios/'+tipoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra un Usuario por ID
 */
 const borrarUsuariosID = (tipoId) => {
    return axiosConfig.delete('usuarios/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta un usuario por ID
 */
 const obtenerUsuariosID = (tipoId) => {
    return axiosConfig.get('usuarios/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerUsuarios,
    crearUsuario,
    editarUsuariosID,
    borrarUsuariosID,
    obtenerUsuariosID
}