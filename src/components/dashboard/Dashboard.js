import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { HomeContainer, Container } from "../../styled-components/styleIndex";

import DashboardCharts from "./DashboardCharts";
import DashboardRecent from "./DashboardRecent";


const Dashboard = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month_desc = months[new Date().getMonth()]

    const [currentBudget, setCurrentBudget] = useState([])
    const [ currentTotalTransactions, setCurrentTotalTransactions ] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    fetch (`http://localhost:9292/budgetsummary/${month_desc}`)
    .then(response => response.json())
    .then(data => {
        if (data) {
            setCurrentBudget(data)
            setLoading(false)
        }
        else {
            console.error(data)
            console.log(data);
            
        };
    })
    },[])

    useEffect(() => {
    fetch (`http://localhost:9292/budgets/${currentBudget.id}/${month_desc}/transactions/sum`)
    .then(response => response.json())
    .then(data => {
        setCurrentTotalTransactions(data)
        setLoading(false)
    })
    .catch(err => alert(err))
    },[currentBudget])

    if (loading) return <h1>Loading...</h1>

 
    // logic for displaying either budget data or prompt to add new budget if one is missing this month

    if (currentBudget.length !== 0) {

    return (
        <HomeContainer>
            <h1>{month_desc} Budget Summary</h1>
            <DashboardCharts 
                currentBudget={currentBudget}
                currentTotalTransactions={currentTotalTransactions}
                month_desc={month_desc}
            />
            <Link to={`/budgets/${currentBudget.id}/transactions`}>
                <button>Review your {month_desc} transactions {'>>'} </button>
            </Link>
                <br/>
                <br/>
            <Link to="/transactions/new">
                <button>Add a new transaction {'>>'} </button>
            </Link> 

            <h2>Recent Transactions</h2>
            <Container>
                <DashboardRecent />
            </Container>

            <Link to="/transactions">
            <h2>...See All Transactions</h2>
            </Link>
        </HomeContainer>
    )
    } else { 
    return (
        <HomeContainer>
            <h1>{month_desc} Budget Summary</h1>
            <div>
                <h2>You don't have a budget yet!</h2>
                <Link to="/budgets/new">
                    <button>Add a new budget for {month_desc} {'>>'} </button>
                </Link>
            </div>
        <h2>Recent Transactions</h2>
            <DashboardRecent />

        <Link to="/transactions">
            <h2>...See All Transactions</h2>
        </Link>
        </HomeContainer>
  
    )}
}
export default Dashboard