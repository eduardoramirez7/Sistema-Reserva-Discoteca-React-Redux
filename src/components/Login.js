import React from 'react'
import { Component } from 'react';
import { Col, Form, Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar from './nav/NavBar'
import { signin } from "../helpers/auth";
import '../styles/login.css';

export default function Login() {


        return (
            <div>
                <NavBar />
                <div class="jumbotron" className="container center">
                    <Jumbotron>
                        <Form autoComplete="off">
                            <div className="form-group-login">

                                <Form.Group className="form-group-color">
                                    <row>
                                        <h1>Inicio de Sesión en <Link to="/">reservAPP</Link>
                                        </h1>
                                        <p>Ingresa los datos de tu cuenta registrada.</p>
                                    </row>
                                </Form.Group>

                                <Form.Group>
                                    <Col sm={7}>
                                        <Form.Control id="form-input" placeholder="Email" name="email" type="email" required />
                                    </Col>
                                </Form.Group>

                                <Form.Group>
                                    <Col sm={7}>
                                        <Form.Control id="form-input" placeholder="Password" name="password" type="password" required />
                                    </Col>
                                </Form.Group>

                            </div>
                            <div>
                                <Button type="submit">Iniciar Sesión</Button>
                            </div>
                            <hr />
                            <p id="p">No tienes una cuenta? <Link to="/signup">Registrate</Link></p>
                        </Form>
                    </Jumbotron>
                </div>

            </div>
        )
}
