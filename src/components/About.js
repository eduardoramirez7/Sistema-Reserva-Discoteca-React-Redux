import React, { Component } from 'react'
import NavBar from './nav/NavBar'
import '../styles/about.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div class="mt-3">           
                    <p><img src="/images/salsa.jpg" width="150" float="left"/>Hola bienvenido</p>
                </div>
                <div id="foto">            
                    <p float="right"><img src="/images/salsa.jpg" width="150" float="left"/></p>
                </div>
                <div id="foto">            
                    <p float="right"><img src="/images/salsa.jpg" width="150" float="left"/>Hola bienvenido</p>
                </div>
                <div id="foto">            
                    <p float="right">Hola bienvenido<img src="/images/salsa.jpg" width="150" float="left"/></p>
                </div>
            </div>
        )
    }
    
}
