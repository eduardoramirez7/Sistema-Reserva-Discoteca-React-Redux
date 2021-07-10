import {RESERVAR_MESA, CANCELAR_RESERVA_MESA} from '../actions/reservaMesaAction'

const default_numero_mesas = {
    mesas: 30
}

const reserva_mesa = (state = default_numero_mesas, action) => {
    switch (action.type) {

        case RESERVAR_MESA:{
            return{
                ...state,
                mesas: state.mesas - action.payload
            }
        }
        case CANCELAR_RESERVA_MESA:{
            return{
                ...state,
                mesas: state.mesas + action.payload
            }
        }

        default: return state;
    }
}

export default reserva_mesa;