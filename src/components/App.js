import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './navigation/NavBar';
import BudgetsContainer from '../containers/BudgetsContainer';
import TransactionsContainer from '../containers/TransactionsContainer';
import BudgetForm from './budgets/BudgetForm';
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
          <Route path="/addnewbudget">
            <BudgetForm/>
          </Route>
          <Route path="/budgets">
            <BudgetsContainer
            />
          </Route>
          <Route path="/transactions">
            <TransactionsContainer
            />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
