import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './navigation/NavBar';
import BudgetsContainer from '../containers/BudgetsContainer';
import TransactionsContainer from '../containers/TransactionsContainer';
import BudgetForm from './budgets/BudgetForm';
import Dashboard from './Dashboard'
import Login from './Login';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/user';


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

          <Route exact path="/transactions">
            <TransactionsContainer />
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
