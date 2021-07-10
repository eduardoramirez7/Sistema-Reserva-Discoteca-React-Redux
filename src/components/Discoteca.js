import React, { Component } from 'react'
import { Button, Card, CardGroup, Jumbotron } from 'react-bootstrap'
import NavBar from './nav/NavBar'
import { auth } from '../services/firebase'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {elegir_discoteca_action} from '../actions/elegirDiscotecaAction'


class Discoteca extends Component {



    listaDiscotecas(param) {
        switch (param) {
            case 1:
                return (
                    <div>
                        <h1>SALSA</h1>
                        <CardGroup className="mb-4 mt-2">
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/salsa.jpg" />
                                <Card.Body>
                                    <Card.Title>SALSA SABROSA</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color" onClick={()=> {
                                                this.props.elegir_discoteca_action(1);
                                            }}>ENTRAR</Link></Button>
                                    
                                </Card.Body>
                            </Card>
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/rock.jpg" />
                                <Card.Body>
                                    <Card.Title>VIVE SALSA</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color" onClick={()=> {
                                                this.props.elegir_discoteca_action(1);
                                            }}>ENTRAR</Link></Button>
                                </Card.Body>
                            </Card>
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/electronica.png" />
                                <Card.Body>
                                    <Card.Title>SALSA CLUB</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color" onClick={()=> {
                                                this.props.elegir_discoteca_action(1);
                                            }}>ENTRAR</Link></Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>

                )
            case 2:
                return (
                    <div>
                        <h1>ROCK</h1>
                        <CardGroup className="mb-4 mt-2">
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/salsa.jpg" />
                                <Card.Body>
                                    <Card.Title>ROCK -N- ROCK</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color"
                                    >ENTRAR</Link></Button>
                                    
                                </Card.Body>
                            </Card>
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/rock.jpg" />
                                <Card.Body>
                                    <Card.Title>HEAVY CLUB</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color"
                                    >ENTRAR</Link></Button>
                                </Card.Body>
                            </Card>
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/electronica.png" />
                                <Card.Body>
                                    <Card.Title>HARD ROCK</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color"
                                    >ENTRAR</Link></Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                )
                
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <Jumbotron>
                    {this.listaDiscotecas(this.props.elegir_genero.genero)}
                </Jumbotron>
            </div>
        )
    }

}

const mapDispatchToProps = {
    elegir_discoteca_action
}

const mapStoretoProps = (state) => {
    return {
        elegir_genero: state.elegir_genero
    }
}

export default connect(mapStoretoProps, mapDispatchToProps)(Discoteca);
