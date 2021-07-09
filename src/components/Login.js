import React from 'react'
import { Component } from 'react';
import { Col, Form, Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar from './nav/NavBar'
import { signin } from "../helpers/auth";
import '../styles/login.css';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: "" });
        try {
            await signin(this.state.email, this.state.password);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <Jumbotron className="jumbotron">
                        <Form autoComplete="off" onSubmit={this.handleSubmit}>
                            <div className="form-group-login">

                                <Form.Group className="form-group-color">
                                    <row>
                                        <h1>Inicio de Sesión en <Link to="/">reservAPP <img src="/images/logo.png" width="70"/></Link>
                                        </h1>
                                        <p>Ingresa los datos de tu cuenta registrada.</p>
                                    </row>
                                </Form.Group>

                                <Form.Group>
                                    <Col sm={7}>
                                        <Form.Control id="form-input" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email} required />
                                    </Col>
                                </Form.Group>

                                <Form.Group>
                                    <Col sm={7}>
                                        <Form.Control id="form-input" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password" required />
                                    </Col>
                                </Form.Group>

                            </div>
                            <div>
                                {this.state.error ? (
                                    <p>{this.state.error}</p>
                                ) : null}
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

}
