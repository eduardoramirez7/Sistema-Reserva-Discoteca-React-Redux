import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">

      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/signup"  component={Signup}></Route>
          <Route path="/login"  component={Login}></Route>
          <Route path="/404" component={NotFoundPage} />
                  <Route path="*">
                      <Redirect to="/404" />
                  </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
