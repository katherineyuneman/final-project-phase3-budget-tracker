import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { DashContainer, HomeContainer, Card, Container, ProductFeatureContainer} from "../styled-components/styleIndex"
import { PieChart, Pie} from 'recharts';
import { format } from 'date-fns'


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
    .then(data => {
        if (data) {
            setCurrentBudget(data)
        }
        else {
            console.error(data)
            console.log(data);
            
        };
    })
    .catch(err => alert(err))

    fetch (`http://localhost:9292/transactions/recent`)
    .then(response => response.json())
    .then(data => setRecentTransactions(data))
    .catch(err => alert(err))
    },[])

    console.log("current budget:", currentBudget)

    useEffect(() => {
    fetch (`http://localhost:9292/budgets/${currentBudget.id}/${month_desc}/transactions/sum`)
    .then(response => response.json())
    .then(data => setCurrentTotalTransactions(data))
    .catch(err => alert(err))
    },[currentBudget])

    
        let dateToday = new Date();
        let lastDayOfMonth = new Date(dateToday.getFullYear(), dateToday.getMonth()+1, 0).getDate();
        let daysUntilEndOfMonth = lastDayOfMonth - dateToday.getDate();

        
    
        const recentTransactionsMapped = recentTransactions.map((transaction) => {
        const formattedDate = format(new Date(transaction.created_at), 'yyyy-MM-dd')
        const formattedTime = format(new Date(transaction.created_at),'pp')

        return (
            <Card key={transaction.id}>
                <h1>${transaction.amount}</h1>
                <h2>{transaction.description}</h2>
                <h5>
                    {formattedDate}
                    < br/>
                    {formattedTime}
                    <br />
                </h5>
            </Card>
        ) 
    })
 
    console.log("curren budg:", currentBudget)

    if (currentBudget.length !== 0) {

        const budgetAmount = parseInt(currentBudget.amount)
        const totalTransactionAmount = parseInt(currentTotalTransactions)
        const totalAvailable = budgetAmount - totalTransactionAmount

    const pieData = [
        {"name": 'Total Spent', "budget": totalTransactionAmount, "fill": "#E7717D"},
        {"name": 'Total Available', "budget": totalAvailable, "fill": "#AFD275"}
      ];

    const renderLabel = (entry) => {
        return (`${entry.name}: $${entry.value}`)
    }

    return (
        <HomeContainer>
            <h1>{month_desc} Budget Summary</h1>
            <DashContainer>
                <h2 className="topBar">${budgetAmount.toFixed(2)}</h2>
                <div className="left">
                    <PieChart width={650} height={200}>
                    <Pie data={pieData} dataKey="budget" nameKey="budget" cx="50%" cy="50%" label={renderLabel}>
                    {/* <LabelList dataKey="budget" nameKey="budget" position="outside" angle="45" clockWise="2"/> */}
                    </Pie>
                    </PieChart>
                </div>
                <div className="right">
                    <h3>Amount spent this month:</h3>
                    <h2>${totalTransactionAmount.toFixed(2)}</h2>
                    <h3>Amount left this month:</h3>
                        {totalAvailable > 0 ? <h2 className="positive">${totalAvailable.toFixed(2)}</h2> : <h2 className="negative">${totalAvailable.toFixed(2)}</h2>}
                    <h3>Days left in {month_desc}</h3>
                    <h2 align="center" className="daysLeft">{daysUntilEndOfMonth} </h2>
                </div>
        
            </DashContainer>
            <Link to={`/budgets/${currentBudget.id}/${month_desc}/transactions`}>
                <button>Review your {month_desc} transactions {'>>'} </button>
            </Link>
            <br/>
            <br/>
            <Link to="/transactions/new">
                <button>Add a new transaction {'>>'} </button>
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
    <Container>
        {recentTransactionsMapped}
    </Container>
        <Link to="/transactions">
            <h2>...See All Transactions</h2>
        </Link>

        </HomeContainer>
  
  )
}
}
export default Dashboard