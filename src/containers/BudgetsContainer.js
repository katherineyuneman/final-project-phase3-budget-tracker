import { useState, useEffect } from "react"
import BudgetsList from "../components/budgets/BudgetsList"
import TransactionForm from "../components/transactions/TransactionForm";
import { Link } from 'react-router-dom'
import { ProductFeatureContainer, DropDown, SearchStyle, HomeContainer } from "../styled-components/styleIndex";
import BudgetForm from "../components/budgets/BudgetForm";

function BudgetsContainer() {
  const [budgets, setBudgets] = useState([])
  const [loading, setLoading] = useState(true)

  console.log("budgets from container:",budgets)
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

  const handleBudgetDelete = (id) => {
    const removalOfBudget = budgets.filter((budget) => budget.id !== id);
    setBudgets(removalOfBudget);
  }

  const updatedBudgets = budgets.map((budget) => {
    const newObj = {amount: budget.amount, id: budget.id, month: budget.month.month_desc, year: budget.month.year}
    return newObj
  })

  return (
    <div>
      <ProductFeatureContainer>
      <HomeContainer>
      <Link to={"/budgets/new"}>
        <button>Add New Budget {'>>'} </button>
      </Link>
      </HomeContainer>
      <BudgetsList updatedBudgets={updatedBudgets} onBudgetDelete={handleBudgetDelete}/>
      <TransactionForm updatedBudgets={updatedBudgets}/>
      </ProductFeatureContainer>
    </div>
  )
}

export default BudgetsContainer
