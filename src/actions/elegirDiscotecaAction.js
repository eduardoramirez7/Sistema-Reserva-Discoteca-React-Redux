export const ELEGIR_DISCOTECA= 'ELEGIR_DISCOTECA';

export const elegir_discoteca_action = (cant) => {
    return {
        type: ELEGIR_DISCOTECA,
        payload: cant
    } 
}