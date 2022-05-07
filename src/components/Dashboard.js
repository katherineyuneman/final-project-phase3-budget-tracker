import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { HomeContainer } from "../styled-components/styleIndex"

const Dashboard = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month_desc = months[new Date().getMonth()]
    // const monthName = months[currentDate.getMonth()];
    // console.log(monthName)

    const [currentBudget, setCurrentBudget] = useState([])
    // const [loading, setLoading] = useState(true)
    const [ currentTotalTransactions, setCurrentTotalTransactions ] = useState(0)
    
    // const {id, month} = useParams()


    useEffect(() => {
    fetch (`http://localhost:9292/budgetsummary/${month_desc}`)
    .then(response => response.json())
    .then(data => setCurrentBudget(data))
    .catch(err => alert(err))
}   ,[])

console.log("current budget:",currentBudget.id)

    useEffect(() => {
    fetch (`http://localhost:9292/budgets/${currentBudget.id}/${month_desc}/transactions/sum`)
    .then(response => response.json())
    .then(data => setCurrentTotalTransactions(data))
    .catch(err => alert(err))
    },[currentBudget])


    const budgetAmount = parseFloat(currentBudget.amount)
    const totalTransactionAmount = parseFloat(currentTotalTransactions)
    const totalAvailable = budgetAmount - totalTransactionAmount
  

  return (
    <HomeContainer>
      <h1>Welcome to your Budget Dashboard</h1>
      <br />
      <h2>{month_desc} Budget Summary</h2>
      <h2>Budget: ${budgetAmount.toFixed(2)}</h2>
      <h3>Amount spent this month: ${totalTransactionAmount.toFixed(2)}</h3>
      <h4>Amount left this month: ${totalAvailable.toFixed(2)}</h4>
      <Link to={`/budgets/${currentBudget.id}/${month_desc}/transactions`}>
        <button>Review your {month_desc} transactions {'>>'} </button>
      </Link>
      <br/>
      <br/>
      <Link to="/budgets">
          <button>Review ALL Budgets! {'>>'} </button>
      </Link>
    </HomeContainer>
  )
}

export default Dashboard