import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/user';
import NavBar from './navigation/NavBar';
import BudgetsContainer from '../containers/BudgetsContainer';
import TransactionsContainer from '../containers/TransactionsContainer';
import BudgetForm from './budgets/BudgetForm';
import Dashboard from './dashboard/Dashboard';
import Login from './Login';
import BudgetTransactions from './transactions/BudgetTransactions';
import Budget from './budgets/Budget';
import NewForm from './NewForm';
import TransactionForm from './transactions/TransactionForm';


function App() {
  // const {user, setUser} = useContext(UserContext);

  // useEffect(() => {
  //   fetch("http://localhost:9292/me")
  //   .then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((user) => {
  //         setUser(user)
  //       });
  //   } else {
  //     resp.json().then((error) => console.log(error.error))
  //   }
  //   })
  // },[user, setUser])

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


          <Route exact path='/budgets/:id'>
            <Budget />
          </Route>

          <Route path='/budgets/:id/transactions'>
            <BudgetTransactions />
          </Route>

          <Route exact path="/transactions">
            <TransactionsContainer />
          </Route>

          <Route exact path="/transactions/new">
            <TransactionForm />
          </Route>

          <Route exact path="/new">
            <NewForm />
          </Route>

          <Route exact path="/login">
            <Login />
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
