import React, { Component } from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import NavBar from './nav/NavBar'
import { connect } from 'react-redux'
import { aceptar_reserva_mesa, cancelar_reserva_mesa } from '../actions/reservaMesaAction'
import TextField from '@material-ui/core/TextField';

class Reserva extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <Jumbotron>
                    <h1>Bienvenido(a)</h1>
                    <hr></hr>
                    
                    <div>
                        <Jumbotron>
                        Numero de mesas disponibles: {this.props.reserva_mesa.mesas}
                        </Jumbotron>
                    </div>
                    <div>
                        <Jumbotron>
                            <div id="date">
                                <p>Elija la fecha y hora para su reserva</p>
                                <form noValidate>
                                    <TextField
                                        id="datetime-local"
                                        label="Next appointment"
                                        type="datetime-local"
                                        defaultValue="2017-05-24T10:30"
                                    />
                                </form>
                                <Button className="mt-2" variant="primary" onClick={()=> {
                                                this.props.aceptar_reserva_mesa(1);
                                            }}>Reservar</Button>
                            </div>
                        </Jumbotron>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

const mapStoretoProps = (state) => {
    return {
        reserva_mesa: state.reserva_mesa
    }
}

const mapDispatchToProps = {
    aceptar_reserva_mesa,
    cancelar_reserva_mesa
}

export default connect(mapStoretoProps, mapDispatchToProps)(Reserva);