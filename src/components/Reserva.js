import React, { Component } from 'react'
import { Button, Col, Jumbotron, Row } from 'react-bootstrap'
import NavBar from './nav/NavBar'
import { connect } from 'react-redux'
import { aceptar_reserva_mesa, cancelar_reserva_mesa } from '../actions/reservaMesaAction'
import TextField from '@material-ui/core/TextField';
import '../styles/reserva.css'

class Reserva extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <Jumbotron id="container-reserva">
                    <Row>
                        <Col>
                            <h1 id="h1">Bienvenido(a)</h1>
                        </Col>
                        <Col>
                            <h3 id="h3">Mesas disponibles: {this.props.reserva_mesa.mesas}</h3>
                        </Col>
                    </Row>
                    <hr></hr>
                    <div>
                        <Jumbotron className="info-reserva">
                            <Row>
                                <Col className="img">
                                    <img src="/images/img-reserva.jpg" width="300" class="mr-5" />
                                </Col>
                                <div id="promo">
                                    <h2>Mira lo que tenemos hoy para ti!!</h2>
                                    <br />
                                    <li>Hoy descuentos del 20% en todos los licores</li>
                                    <li>Mujeres no pagan cover</li>
                                    <li>Por la compra de 2 botellas de cualquier licor, lleva la 3 gratis.</li>
                                </div>
                                <Col>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    <div id="precios">
                                        <h2>Precios Licores</h2>
                                        <br />
                                        <li>Botella de Ron: 95000</li>
                                        <li>Botella de Whiskey: 250000</li>
                                        <li>Botella de Tequila: 180000</li>
                                    </div>
                                </Col>
                                <Col>
                                    <div id="date">
                                        <p id="p-r">Elija la fecha y hora para tu reserva</p>
                                        <form noValidate>
                                            <TextField
                                                id="datetime-local"
                                                type="datetime-local"
                                                defaultValue="2017-05-24T10:30"

                                            />
                                        </form>
                                        <Col className="button">
                                            <Button className="mt-2" variant="primary" onClick={() => {
                                                this.props.aceptar_reserva_mesa(1);
                                            }}>Reservar</Button>
                                            <Button className="mt-2 ml-2" variant="primary" onClick={() => {
                                                this.props.cancelar_reserva_mesa(1);
                                            }}>Cancelar</Button>
                                        </Col>

                                    </div>
                                </Col>
                            </Row>

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