import { combineReducers } from "redux";
import reserva_mesa from './reservaMesaReducer'
import elegir_genero from './elegirGeneroReducer'
import elegir_discoteca from './elegirDiscotecaReducer'

const rootReducers = combineReducers({
    reserva_mesa,
    elegir_genero,
    elegir_discoteca
})

export default rootReducers;