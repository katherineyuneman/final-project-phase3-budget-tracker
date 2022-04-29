import { NavLink } from "react-router-dom"
import { HomeContainer } from "../styled-components/styleIndex"

const Dashboard = () => {
  return (
    <HomeContainer>
      <h1>Welcome to your Budget Dashboard</h1>
      <br />
      <NavLink to="/budgets">
        <button>Review your Budgets! {'>>'} </button>
      </NavLink>
    </HomeContainer>
  )
}

export default Dashboard