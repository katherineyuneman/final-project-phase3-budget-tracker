import { Link } from "react-router-dom"
import { HomeContainer } from "../styled-components/styleIndex"

const Dashboard = () => {
  return (
    <HomeContainer>
      <h1>Welcome to your Budget Dashboard</h1>
      <br />
      <Link to={"/budgets"}>
        <button>Start Budgeting! {'>>'} </button>
      </Link>
    </HomeContainer>
  )
}

export default Dashboard