import './App.css';
import NavBar from './components/navigation/nav-bar';
import { Route, Switch } from 'react-router-dom';
import Validator from './pages/validator';
import Distance from './pages/distance';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact={true} path="/" component={Validator} />
        <Route exact={true} path="/distance-calculator" component={Distance} />
      </Switch>
    </div>
  );
}

export default App;
