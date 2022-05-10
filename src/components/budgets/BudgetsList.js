import BudgetCard from "./BudgetCard"
import { Container } from "../../styled-components/styleIndex"

function BudgetsList({onBudgetDelete, updatedBudgets}) {
  console.log("inside budget list:",updatedBudgets)

  const eachBudget = 
  updatedBudgets.map((budget) => {
    console.log("budget inside map", budget)
  return <BudgetCard
          key={budget.id}
          budget={budget}
          onBudgetDelete={onBudgetDelete}
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
