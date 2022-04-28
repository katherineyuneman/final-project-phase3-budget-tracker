import { useState, useEffect } from "react"
import BudgetsList from "../components/budgets/BudgetsList"
import { ProductFeatureContainer, DropDown, SearchStyle } from "../styled-components/styleIndex";

function BudgetsContainer() {
  const [budgets, setBudgets] = useState([])

  useEffect(() => {
    fetch ('http://localhost:9292/budgets')
    .then(response => response.json())
    .then(data => setBudgets(data))
    .catch(err => alert(err))
  },[])

  return (
    <div>
      <ProductFeatureContainer>
      <BudgetsList budgets={budgets}/>
      </ProductFeatureContainer>
    </div>
  )
}

export default BudgetsContainer
