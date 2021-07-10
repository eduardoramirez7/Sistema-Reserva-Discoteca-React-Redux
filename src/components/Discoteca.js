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
                                <Card.Img className="img" variant="top" src="/images/salsa1.jpg" />
                                <Card.Body>
                                    <Card.Title>BALL CLUB DE LA SALSA</Card.Title>
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
                                <Card.Img className="img" variant="top" src="/images/salsa2.png" />
                                <Card.Body>
                                    <Card.Title>SALSA KING</Card.Title>
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
                                <Card.Img className="img" variant="top" src="/images/salsa3.png" />
                                <Card.Body>
                                    <Card.Title>RUMBALAND CLUB</Card.Title>
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
                                <Card.Img className="img" variant="top" src="/images/rock1.jpg" />
                                <Card.Body>
                                    <Card.Title>OZZY CAFE BAR ROCK</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color"
                                    >ENTRAR</Link></Button>
                                    
                                </Card.Body>
                            </Card>
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/rock2.jpg" />
                                <Card.Body>
                                    <Card.Title>ROCK SHOX</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color"
                                    >ENTRAR</Link></Button>
                                </Card.Body>
                            </Card>
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/rock3.jpg" />
                                <Card.Body>
                                    <Card.Title>EL TALON CAFE BAR ROCK</Card.Title>
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
                case 3:
                return (
                    <div>
                        <h1>ELECTRONICA</h1>
                        <CardGroup className="mb-4 mt-2">
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/electro1.jpg" />
                                <Card.Body>
                                    <Card.Title>365 NEPTUNO</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color"
                                    >ENTRAR</Link></Button>
                                    
                                </Card.Body>
                            </Card>
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/electro2.jpg" />
                                <Card.Body>
                                    <Card.Title>DUVET</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color"
                                    >ENTRAR</Link></Button>
                                </Card.Body>
                            </Card>
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/electro3.jpg" />
                                <Card.Body>
                                    <Card.Title>MOKKA DISCO</Card.Title>
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
                case 4:
                return (
                    <div>
                        <h1>REGGAETON</h1>
                        <CardGroup className="mb-4 mt-2">
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/reg1.png" />
                                <Card.Body>
                                    <Card.Title>SKY DISCOTECA</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color"
                                    >ENTRAR</Link></Button>
                                    
                                </Card.Body>
                            </Card>
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/reg2.png" />
                                <Card.Body>
                                    <Card.Title>K'LETA</Card.Title>
                                    <Card.Text>
                                        Ubicado en la calle24 # 9-85 - Horario de atencion: Miercoles a domingo
                                        de 7 a 2 AM. Parqueadero Gratuito.
                                    </Card.Text>
                                    <Button variant="outline-secondary"><Link to="/reserva" id="color"
                                    >ENTRAR</Link></Button>
                                </Card.Body>
                            </Card>
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/reg3.jpg" />
                                <Card.Body>
                                    <Card.Title>KARMA</Card.Title>
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
                case 5:
                return (
                    <div>
                        <h1>BACHATA</h1>
                        <CardGroup className="mb-4 mt-2">
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/salsa.jpg" />
                                <Card.Body>
                                    <Card.Title>BACHATA ROSA</Card.Title>
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
                                    <Card.Title>BACHATA DANCE</Card.Title>
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
                                    <Card.Title>AVENTURA CLUB</Card.Title>
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
                case 6:
                return (
                    <div>
                        <h1>JAZZ</h1>
                        <CardGroup className="mb-4 mt-2">
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/salsa.jpg" />
                                <Card.Body>
                                    <Card.Title>SOUND JAZZ</Card.Title>
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
                                    <Card.Title>JAZZY</Card.Title>
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
                                    <Card.Title>SAX</Card.Title>
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
                case 7:
                return (
                    <div>
                        <h1>BALADAS</h1>
                        <CardGroup className="mb-4 mt-2">
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/salsa.jpg" />
                                <Card.Body>
                                    <Card.Title>SERENATA CLUB</Card.Title>
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
                                    <Card.Title>SECRETO CLUB</Card.Title>
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
                                    <Card.Title>ROMEO Y JULIETA</Card.Title>
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
                case 8:
                return (
                    <div>
                        <h1>POPULAR</h1>
                        <CardGroup className="mb-4 mt-2">
                            <Card id="card">
                                <Card.Img className="img" variant="top" src="/images/salsa.jpg" />
                                <Card.Body>
                                    <Card.Title>LA ZONA DEL DESPECHO</Card.Title>
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
                                    <Card.Title>COPAS Y AMIGOS</Card.Title>
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
                                    <Card.Title>CANTINA VIP</Card.Title>
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
