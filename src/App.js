import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './Components/Signin';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
