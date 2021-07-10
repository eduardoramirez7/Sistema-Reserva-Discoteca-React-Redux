import React from 'react'
import { Component } from 'react'
import { Card, CardGroup, Jumbotron, ListGroup } from 'react-bootstrap'
import NavBar from './nav/NavBar'
import '../styles/genero.css'
import { Link } from 'react-router-dom'
import { auth } from '../services/firebase'
import {connect} from 'react-redux'
import {elegir_genero_musical_action} from '../actions/elegirGeneroAction'



class Generos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser
        };
    }

    render() {

        return (
            <div>
                <NavBar />
                <Jumbotron id="jumbotron-genero">
                    <h3>Elige tu preferencia musical</h3>
                    <div id="container">
                        <div class="jb">
                            <row>
                                <CardGroup className="mb-4 mt-2">
                                    <Card id="card">
                                        <Card.Img className="img" variant="top" src="/images/salsa.jpg"/>
                                        <Card.Body>
                                            <Card.Title>SALSA</Card.Title>
                                            <Card.Text>
                                                Entra y experimenta el increible ritmo musical de la salsa, disfruta
                                                de orquestas en vivo, cada dia se respirar salsa.
                                            </Card.Text>
                                            <Link to="/discoteca" id="color" onClick={()=> {
                                                this.props.elegir_genero_musical_action(1);
                                            }}>Ver mas...</Link>
                                        </Card.Body>
                                    </Card>
                                    <Card id="card">
                                        <Card.Img className="img" variant="top" src="/images/rock.jpg" />
                                        <Card.Body>
                                            <Card.Title>ROCK</Card.Title>
                                            <Card.Text>
                                                Entra para que disfrutes de los mejores lugares de Rock, bandas
                                                en vivo y muchas sorpresas más. Entra ahora mismo!
                                            </Card.Text>
                                            <Link to="/discoteca" id="color" onClick={()=> {
                                                this.props.elegir_genero_musical_action(2);
                                            }}>Ver mas...</Link>
                                        </Card.Body>
                                    </Card>
                                    <Card id="card">
                                        <Card.Img className="img" variant="top" src="/images/electronica.png" />
                                        <Card.Body>
                                            <Card.Title>ELÉCTRONICA</Card.Title>
                                            <Card.Text>
                                                Contenido musical que te hace vibrar y sentir ganas de nunca parar,
                                                 siente recorre la música eléctronica por tus venas.
                                            </Card.Text>
                                            <Link to="/discoteca" id="color" onClick={()=> {
                                                this.props.elegir_genero_musical_action(3);
                                            }}>Ver mas...</Link>
                                        </Card.Body>
                                    </Card>
                                    <Card id="card">
                                        <Card.Img className="img" variant="top" src="/images/reggaeton.jpg" />
                                        <Card.Body>
                                            <Card.Title>REGGAETON</Card.Title>
                                            <Card.Text>
                                                Lo mejor de la música urbana la puedes encontrar en las mas populares, 
                                                discotecas de la ciudad, ven y conocelas.
                                            </Card.Text>
                                            <Link to="/discoteca" id="color" onClick={()=> {
                                                this.props.elegir_genero_musical_action(4);
                                            }}>Ver mas...</Link>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </row>
                            <row>
                                <CardGroup>
                                    <Card id="card">
                                        <Card.Img className="img" variant="top" src="/images/Bachata.jpg" />
                                        <Card.Body>
                                            <Card.Title>BACHATA</Card.Title>
                                            <Card.Text>
                                                No puedes dejar de disfrutar de este ritmo musical que esta causando 
                                                sensacion en el mundo, conoce y disfruta ahora.
                                            </Card.Text>
                                            <Link to="/discoteca" id="color" onClick={()=> {
                                                this.props.elegir_genero_musical_action(5);
                                            }}>Ver mas...</Link>
                                        </Card.Body>
                                    </Card>
                                    <Card id="card">
                                        <Card.Img className="img" variant="top" src="/images/jazz.jpg" />
                                        <Card.Body>
                                            <Card.Title>JAZZ</Card.Title>
                                            <Card.Text>
                                                Disfruta de música tranquila, recargate de la mejor energia y descubre 
                                                que más que los instrrumentos es lo que expresa del Jazz.
                                            </Card.Text>
                                            <Link to="/discoteca" id="color" onClick={()=> {
                                                this.props.elegir_genero_musical_action(6);
                                            }}>Ver mas...</Link>
                                        </Card.Body>
                                    </Card>
                                    <Card id="card">
                                        <Card.Img className="img" variant="top" src="/images/baladas.jpg" />
                                        <Card.Body>
                                            <Card.Title>BALADAS</Card.Title>
                                            <Card.Text>
                                                Eres una persona romantica, que disfruta viviendo el amor día a día, 
                                                este lugar es para ti, disfruta que aun hay mas amor que descubrir.
                                            </Card.Text>
                                            <Link to="/discoteca" id="color" onClick={()=> {
                                                this.props.elegir_genero_musical_action(7);
                                            }}>Ver mas...</Link>
                                        </Card.Body>
                                    </Card>
                                    <Card id="card">
                                        <Card.Img className="img" variant="top" src="/images/popular.jpg" />
                                        <Card.Body>
                                            <Card.Title>POPULAR</Card.Title>
                                            <Card.Text>
                                                ¿Enamorado o Despechado? Este es tu lugar, la música popular no te puede 
                                                faltar, ven y gozatela con un buen guarito.
                                            </Card.Text>
                                            <Link to="/discoteca" id="color" onClick={()=> {
                                                this.props.elegir_genero_musical_action(8);
                                            }}>Ver mas...</Link>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </row>
                        </div>
                    </div>
                </Jumbotron>
            </div >
        )
    }

}

const mapDispatchToProps = {
    elegir_genero_musical_action
}

export default connect(null, mapDispatchToProps)(Generos);
