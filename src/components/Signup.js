import React from 'react'
import NavBar from './nav/NavBar'
import { Jumbotron, Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/signup.css';
import { Component } from 'react';
import { signup } from '../helpers/auth';
import { signInWithGoogle} from "../helpers/auth";

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        try {
            await signup(this.state.email, this.state.password);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async googleSignIn() {
        try {
            await signInWithGoogle();
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
                        <Form onSubmit={this.handleSubmit}>
                            <div className="form-group-color">
                                <Form.Group>
                                    <h1>Registrate en<Link to="/"> reservAPP <img src="/images/logo.png" width="70"/></Link>
                                    </h1>
                                    <p>Ingresa tus datos para crear tu cuenta.</p>
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

                            <div class="buttons">
                                <row>
                                    {this.state.error ? <p>{this.state.error}</p> : null}
                                    <Button type="submit">Registrate</Button>
                                    <hr></hr>
                                    <p>o</p>
                                </row>
                                <row>
                                    <Button className="mr-3" variant="light" onClick={this.googleSignIn} type="button">
                                        Registrate con Google
                                    </Button>
                                </row>
                            </div>
                            <br />
                            <p id="p">Tienes una cuenta? <Link to={"/login"}>Ingresa tu cuenta</Link></p>
                        </Form>
                    </Jumbotron>
                </div>
            </div>
        )
    }

}
