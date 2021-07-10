import {ELEGIR_GENERO} from '../actions/elegirGeneroAction'

const default_genero_musical = {
    genero: 0
}

const elegir_genero = (state = default_genero_musical, action) => {
    switch (action.type) {

        case ELEGIR_GENERO:{
            return{
                ...state,
                genero: action.payload
            }
        }
        default: return state;
    }
}

export default elegir_genero;