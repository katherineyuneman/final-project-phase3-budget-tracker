import { Header} from "../../styled-components/styleIndex"
import { NavLink } from 'react-router-dom'


const NavBar = () => {

  return (
    <div className='nav-wrapper'>
      <Header>
        <h1>Budget Tracker</h1>
        <nav>
            <li>Dashboard</li>
            <li>Budgets</li>
            <li>My Account</li>
       </nav>
      </Header>
    </div>
  )
}

export default NavBar;
