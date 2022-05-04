import BudgetCard from "./BudgetCard"
import { Container } from "../../styled-components/styleIndex"

function BudgetsList({updatedBudgets}) {
  console.log("inside budget list:",updatedBudgets)

  const eachBudget = 
  updatedBudgets.map((budget) => {
    console.log("budget inside map", budget)
  return <BudgetCard
          key={budget.id}
          budget={budget}
          />
        })

  return (
    <div>
      <Container>
      {eachBudget}
      </Container>
    </div>
  )
}

export default BudgetsList
