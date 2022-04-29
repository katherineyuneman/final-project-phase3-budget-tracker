import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './navigation/NavBar';
import BudgetsContainer from '../containers/BudgetsContainer';
import TransactionsContainer from '../containers/TransactionsContainer';
import BudgetForm from './budgets/BudgetForm';
import Dashboard from './Dashboard'


function App() {
  return (
    
      <Router>
        <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/budgets/new">
            <BudgetForm />
          </Route>

          <Route exact path="/budgets">
            <BudgetsContainer />
          </Route>

          <Route exact path="/transactions">
            <TransactionsContainer />
          </Route>

          <Route exact path="/">
            <Dashboard />
          </Route>

        </Switch>
        </div>
      </Router>
   
  );
}

export default App;
// export default withRouter(App)
