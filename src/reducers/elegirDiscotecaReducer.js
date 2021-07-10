import {ELEGIR_DISCOTECA} from '../actions/elegirDiscotecaAction'

const default_discoteca = {
    discoteca: 0
}

const elegir_discoteca = (state = default_discoteca, action) => {
    switch (action.type) {

        case ELEGIR_DISCOTECA:{
            return{
                ...state,
                discoteca: action.payload
            }
        }
        default: return state;
    }
}

export default elegir_discoteca;