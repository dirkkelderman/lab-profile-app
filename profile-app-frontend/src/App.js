import './App.css';
import Login from './components/auth/Login'
import {Switch, Route} from 'react-router-dom'
import Signup from './components/auth/Signup';
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      
      <HomePage />
      
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>

    </div>
  );
}

export default App;
