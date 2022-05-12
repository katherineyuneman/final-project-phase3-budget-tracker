import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { HomeContainer, Card, Container, ProductFeatureContainer} from "../styled-components/styleIndex"
import { PieChart, Pie, Label, LabelList, Cell } from 'recharts';

const Dashboard = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month_desc = months[new Date().getMonth()]
    // const monthName = months[currentDate.getMonth()];
    // console.log(monthName)

    const [currentBudget, setCurrentBudget] = useState([])
    // const [loading, setLoading] = useState(true)
    const [ currentTotalTransactions, setCurrentTotalTransactions ] = useState(0)
    const [ recentTransactions, setRecentTransactions ] = useState([])
    
    // const {id, month} = useParams()


    useEffect(() => {
    fetch (`http://localhost:9292/budgetsummary/${month_desc}`)
    .then(response => response.json())
    .then(data => setCurrentBudget(data))
    .catch(err => alert(err))

    fetch (`http://localhost:9292/transactions/recent`)
    .then(response => response.json())
    .then(data => setRecentTransactions(data))
    .catch(err => alert(err))
    },[])

    useEffect(() => {
    fetch (`http://localhost:9292/budgets/${currentBudget.id}/${month_desc}/transactions/sum`)
    .then(response => response.json())
    .then(data => setCurrentTotalTransactions(data))
    .catch(err => alert(err))
    },[currentBudget])


    const budgetAmount = parseInt(currentBudget.amount)
    const totalTransactionAmount = parseInt(currentTotalTransactions)
    const totalAvailable = budgetAmount - totalTransactionAmount

    
    const recentTransactionsMapped = recentTransactions.map((transaction) => {
        return (
            <Card key={transaction.id}>
                <h1>${transaction.amount}</h1>
                <h5>
                    ${transaction.description}
                    <br />
                    {transaction.created_at}
                    <br />
                </h5>
            </Card>
        ) 
    })

    const pieData = [
        {"name": 'Total Spent', "budget": totalTransactionAmount, "fill": "#57c0e8" },
        {"name": 'Total Available', "budget": totalAvailable, "fill": "#FF6565"}
        // {name: 'Geek-i-knack', students: 100},
        // {name: 'Geek-o-mania', students: 300}
      ];

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
      <br />
        <PieChart width={500} height={300}>
          <Pie data={pieData} dataKey="budget" nameKey="budget" cx="50%" cy="50%" fill="blue" label={(entry) => entry.name}/>
        </PieChart>

      <h2>Recent Transactions</h2>
    <Container>
        {recentTransactionsMapped}
    </Container>
        <Link to="/transactions">
            <h2>...See All Transactions</h2>
        </Link>
    </HomeContainer>
  )
}

export default Dashboard