import BudgetCard from "./BudgetCard"
import { Container } from "../../styled-components/styleIndex"

function BudgetsList({budgets}) {
 

  const eachBudget = 
  budgets.map((budget) => 
    <BudgetCard
      key={budget.id}
      budget={budget}
    />)
  return (
    <div>
      <Container>
      {eachBudget}
      </Container>
    </div>
  )
}

export default BudgetsList
