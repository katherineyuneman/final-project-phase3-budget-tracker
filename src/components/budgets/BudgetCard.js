import { Card } from "../../styled-components/styleIndex"
import { Link } from 'react-router-dom'

function BudgetCard({onBudgetDelete, budget:{id, month, amount, year}}) {

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/budgets/${id}`, {
            method: "DELETE",
        });
        
        onBudgetDelete(id)
    }

    return (
      
        <Card>
            <Link to={`/budgets/${id}/${month}/transactions`}>
                <h1>{month} {year}</h1>
            </Link>
            <h5>${amount}</h5>
            <button onClick={handleDeleteClick}>🗑</button>
        </Card>
   
  ) 
}

export default BudgetCard