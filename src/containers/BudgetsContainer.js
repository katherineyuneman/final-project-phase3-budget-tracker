import { useState, useEffect } from "react"
import BudgetsList from "../components/budgets/BudgetsList"
import { ProductFeatureContainer, DropDown, SearchStyle } from "../styled-components/styleIndex";

function BudgetsContainer() {
  const [budgets, setBudgets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch ('http://localhost:9292/budgets')
    .then(response => response.json())
    .then(data => {
      setBudgets(data)
      setLoading(false)
    })
    .catch(err => alert(err))
  },[])

  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      <ProductFeatureContainer>
      <BudgetsList budgets={budgets}/>
      </ProductFeatureContainer>
    </div>
  )
}

export default BudgetsContainer
