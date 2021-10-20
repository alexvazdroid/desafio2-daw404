
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddPayment from './components/addPayment';
import Products from './components/products';
import AddUser from './components/addUser';
import Home from './components/welcome';

import {DataProvider} from "./components/context/dataprovider"
function App() {
  return (
    <DataProvider>
      <Router>
      <div className="App">
        <Header/>

        <Switch>
          <Route path="/products" component={Products}/>
          <Route path="/payment" component={AddPayment}/>
          <Route path="/user" component={AddUser}/>
          <Route path="/" exact component={Home}/>
        </Switch>

      </div>
      </Router>
    </DataProvider>

    
  );
}

export default App;
