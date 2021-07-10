export const ELEGIR_GENERO= 'ELEGIR_GENERO';

export const elegir_genero_musical_action = (cant) => {
    return {
        type: ELEGIR_GENERO,
        payload: cant
    } 
}