import { Header} from "../../styled-components/styleIndex"
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className='nav-wrapper'>
      <Header>
        <h1>Budget Tracker</h1>
        <nav>
        <NavLink to="/">
            <li>My Dashboard</li>
        </NavLink>
        <NavLink to="/budgets">
            <li>Budgets</li>
        </NavLink>
        <NavLink to="/transactions">
            <li>Transactions</li>
        </NavLink>
        <NavLink to="/new">
            <li className="circle">+</li>
        </NavLink>
       </nav>
       <h2></h2>
       </Header>
    </div>
  )
}

export default NavBar;
