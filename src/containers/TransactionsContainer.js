import { useState, useEffect } from "react"
import BudgetTransactions from "../components/BudgetTransactions";
import TransactionsList from "../components/transactions/TransactionsList";
import { ProductFeatureContainer, DropDown, SearchStyle, HomeContainer } from "../styled-components/styleIndex";
import BudgetsContainer from "./BudgetsContainer";


function TransactionsContainer() {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch ('http://localhost:9292/transactions')
    .then(response => response.json())
    .then(data => {
      setTransactions(data)
      setLoading(false)
    })
    .catch(err => alert(err))
  },[])

  if (loading) return <h1>Loading...</h1>

  function handleDeleteTransaction(id) {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  }
  
  return (
    <div>
      <ProductFeatureContainer>
      <TransactionsList transactions={transactions} onTransactionDelete={handleDeleteTransaction}/>
      </ProductFeatureContainer>
    </div>
  )
}

export default TransactionsContainer





