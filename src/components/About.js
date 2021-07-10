import React, { Component } from 'react'
import NavBar from './nav/NavBar'
import '../styles/about.css'
import { Card, Col, Jumbotron, Row } from 'react-bootstrap'
import '../styles/about.css'



export default class About extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <Jumbotron id="jumb">
                    <h1>Acerca de</h1>
                    <Card className="text-center">
                        <Card.Header className="card">DISCOTECAS</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        <p>La discoteca es un local público con horario preferentemente nocturno para escuchar música grabada, 
                                            bailar y en la mayoría de ellas consumir bebidas.
                                            Se diferencia de las antiguas salas de baile porque la música no es tocada en vivo, sino que proviene 
                                            de discos que son "mezclados" (reproducidos sin solución de continuidad, pero si por un loop) 
                                            por un disc jockey (DJ), que "anima" la noche mezclando la música.</p>
                                    </Col>
                                    <Col>
                                        <img src="/images/disco.jpg" width="300" />
                                    </Col>
                                </Row>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Jumbotron>
            </div>
        )
    }

}
