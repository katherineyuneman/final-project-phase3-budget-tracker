import { DashContainer, HomeContainer, Card, Container, ProductFeatureContainer } from "../../styled-components/styleIndex";
import { PieChart, Pie} from 'recharts';

function DashboardCharts({currentBudget, currentTotalTransactions, month_desc, maxTransaction}) {

    const budgetAmount = parseInt(currentBudget.amount)
    const totalTransactionAmount = parseInt(currentTotalTransactions)
    const totalAvailable = budgetAmount - totalTransactionAmount

    const overBudget = totalAvailable <= 0 ? true : false

    let totalAvailColor
    overBudget ? totalAvailColor = "red" : totalAvailColor = "#AFD275"
    
    let chartLabel
    overBudget ? chartLabel = "OVER-SPENT" : chartLabel= "Total Available"

    const pieData = [
        {"name": 'Total Spent', "budget": totalTransactionAmount, "fill": "#E7717D"},
        {"name": chartLabel, "budget": totalAvailable, "fill": totalAvailColor}
    ];

    const renderLabel = (entry) => {
        return (`${entry.name}: $${entry.value}`)
    }

    let dateToday = new Date();
    let lastDayOfMonth = new Date(dateToday.getFullYear(), dateToday.getMonth()+1, 0).getDate();
    let daysUntilEndOfMonth = lastDayOfMonth - dateToday.getDate();

  return (
    <DashContainer>
        <h2 className="topBar">${budgetAmount.toFixed(2)}</h2>
        {overBudget ? <h2>You are over budget!</h2> : ""}
        <div className="left">
            <PieChart width={650} height={200}>
                <Pie data={pieData} dataKey="budget" nameKey="budget" cx="50%" cy="50%" label={renderLabel} />
            </PieChart>
        </div>
        <div className="right">
            <h3>Amount spent this month:</h3>
            <h2>${totalTransactionAmount.toFixed(2)}</h2>
            <h3>Amount left this month:</h3>
                {totalAvailable > 0 ? <h2 className="positive">${totalAvailable.toFixed(2)}</h2> : <h2 className="negative">${totalAvailable.toFixed(2)}</h2>}
            <h4>Highest transaction this month:</h4>
            <h4>${maxTransaction}</h4>
            <h4>Days left in {month_desc}</h4>
            <h4 align="center" className="daysLeft">{daysUntilEndOfMonth} </h4>
        </div>
    </DashContainer>
  )
}

export default DashboardCharts
