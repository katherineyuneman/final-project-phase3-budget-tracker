import { useState, useEffect } from "react"
import TransactionsList from "../components/transactions/TransactionsList";
import { ProductFeatureContainer, DropDown, SearchStyle, HomeContainer } from "../styled-components/styleIndex";


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
  console.log("transactions in container",transactions)
  return (
    <div>
      <ProductFeatureContainer>
      <TransactionsList transactions={transactions}/>
      </ProductFeatureContainer>
    </div>
  )
}

export default TransactionsContainer
