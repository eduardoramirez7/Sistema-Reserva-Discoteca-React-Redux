export const RESERVAR_MESA = 'RESERVAR_MESA';
export const CANCELAR_RESERVA_MESA = 'CANCELAR_RESERVA_MESA';

export const aceptar_reserva_mesa = (cant) => {
    return {
        type: RESERVAR_MESA,
        payload: cant
    } 
}

export const cancelar_reserva_mesa = (cant) => {
    return {
        type: CANCELAR_RESERVA_MESA,
        payload: cant
    } 
}