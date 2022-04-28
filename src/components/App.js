import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './navigation/NavBar';
import BudgetContainer from '../containers/BudgetContainer';
import TransactionContainer from '../containers/TransactionContainer';
import Dashboard from './Dashboard'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
              <Dashboard />
          </Route>
          <Route exact path="/budgets">
            <BudgetContainer
            />
          </Route>
          <Route exact path="/transactions">
            <TransactionContainer
            />
          </Route>
          {/* <Route path="/products/:id" component={ProductDetail}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
