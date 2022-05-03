import { Card } from "../../styled-components/styleIndex"

function BudgetCard({budget:{amount, month}}) {
    
    return (
      <Card>
    <div>
      <h1>{month}</h1>
      <h5>${amount}</h5>
    </div>
    </Card>
  )
}

export default BudgetCard


// t.string "first_name"
// t.string "last_name"
// t.string "email"

//destructuring props syntax
// {budget: {amount, month, user: {first_name, last_name, email}}}