import { DashContainer, HomeContainer, Card, Container, ProductFeatureContainer } from "../../styled-components/styleIndex";
import { PieChart, Pie} from 'recharts';

function DashboardCharts({currentBudget, currentTotalTransactions, month_desc}) {

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

    let dateToday = new Date();
    let lastDayOfMonth = new Date(dateToday.getFullYear(), dateToday.getMonth()+1, 0).getDate();
    let daysUntilEndOfMonth = lastDayOfMonth - dateToday.getDate();

  return (
    <DashContainer>
        <h2 className="topBar">${budgetAmount.toFixed(2)}</h2>
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
            <h3>Days left in {month_desc}</h3>
            <h2 align="center" className="daysLeft">{daysUntilEndOfMonth} </h2>
        </div>
    </DashContainer>
  )
}

export default DashboardCharts
