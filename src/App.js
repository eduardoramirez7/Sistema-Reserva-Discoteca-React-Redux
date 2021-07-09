import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
import Generos from './components/Generos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { auth } from './services/firebase';


function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/generos' />}
    />
  )
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }

  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute path="/generos" authenticated={this.state.authenticated} component={Generos}></PrivateRoute>
            <PublicRoute path="/about" component={About}></PublicRoute>
            <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
            <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
            <Route path="/404" component={NotFoundPage} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
