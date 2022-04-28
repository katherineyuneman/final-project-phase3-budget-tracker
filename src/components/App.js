import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './navigation/NavBar';
import BudgetsContainer from '../containers/BudgetsContainer';
import TransactionsContainer from '../containers/TransactionsContainer';
import Dashboard from './Dashboard'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/budgets">
            <BudgetsContainer
            />
          </Route>
          <Route exact path="/transactions">
            <TransactionsContainer
            />
          </Route>
          <Route exact path="/">
              <Dashboard />
          </Route>
          {/* <Route path="/products/:id" component={ProductDetail}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
