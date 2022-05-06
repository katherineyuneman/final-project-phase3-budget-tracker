import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { HomeContainer } from "../styled-components/styleIndex"

const Dashboard = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month_desc = months[new Date().getMonth()]
    // const monthName = months[currentDate.getMonth()];
    // console.log(monthName)

    const [currentBudget, setCurrentBudget] = useState([])
    // const [loading, setLoading] = useState(true)
    
    // const {id, month} = useParams()

    

    useEffect(() => {
    fetch (`http://localhost:9292/budgetsummary/${month_desc}`)
    .then(response => response.json())
    .then(data => setCurrentBudget(data))
    .catch(err => alert(err))
    },[])


  return (
    <HomeContainer>
      <h1>Welcome to your Budget Dashboard</h1>
      <br />
      <h2>{month_desc} Budget Summary</h2>
      <h2>{currentBudget.amount}</h2>
      <NavLink to="/budgets">
        <button>Review your Budgets! {'>>'} </button>
      </NavLink>
    </HomeContainer>
  )
}

export default Dashboard