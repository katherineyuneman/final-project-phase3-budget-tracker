import { Card } from "../../styled-components/styleIndex"
import { Link } from 'react-router-dom'

function BudgetCard({budget:{id, month, amount, year}}) {
    return (
      <Link to={`/budgets/${id}/${month}/transactions`}>
        <Card>
            <h1>{month} {year}</h1>
            <h5>${amount}</h5>
        </Card>
    </Link>
  ) 
}

export default BudgetCard