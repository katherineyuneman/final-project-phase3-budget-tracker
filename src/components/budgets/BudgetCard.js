import { Card } from "../../styled-components/styleIndex"

function BudgetCard({budget}) {

  return (
      <Card>
    <div>
      <h1>{budget.month}</h1>
      <h5>{budget.amount}</h5>
    </div>
    </Card>
  )
}

export default BudgetCard
