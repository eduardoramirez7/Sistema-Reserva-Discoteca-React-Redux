import { combineReducers } from "redux";
import reserva_mesa from './reservaMesaReducer'
import elegir_genero from './elegirGeneroReducer'

const rootReducers = combineReducers({
    reserva_mesa,
    elegir_genero
})

export default rootReducers;