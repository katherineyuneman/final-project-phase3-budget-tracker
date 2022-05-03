import { useState, useEffect } from "react"
import BudgetsList from "../components/budgets/BudgetsList"
import TransactionForm from "../components/transactions/TransactionForm";
import { Link } from 'react-router-dom'
import { ProductFeatureContainer, DropDown, SearchStyle, HomeContainer } from "../styled-components/styleIndex";
import BudgetForm from "../components/budgets/BudgetForm";

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
      <HomeContainer><Link to={"/budgets/new"}>
        <button>Add New Budget {'>>'} </button>
      </Link>
      </HomeContainer>
      <BudgetsList budgets={budgets}/>
      <TransactionForm budgets={budgets}/>
      </ProductFeatureContainer>
    </div>
  )
}

export default BudgetsContainer
