import { useState, useEffect } from "react"
import {useHistory } from "react-router-dom"
import { HomeContainer, PopupCheckout } from "../../styled-components/styleIndex"


function TransactionForm() {
    console.log("hello there")
    const [transactionInputs, setTransactionInputs] = useState ({
        description:"",
        amount:"",
        date_created: "",
        category_id: "",
        budget_id:""
    })

    const [budgets, setBudgets] = useState([])

    console.log("budgets from container:",budgets)
    useEffect(() => {
        fetch ('http://localhost:9292/budgets')
        .then(response => response.json())
        .then(data => {
        setBudgets(data)
        })
        .catch(err => alert(err))
    },[])

  const updatedBudgets = budgets.map((budget) => {
    const newObj = {amount: budget.amount, id: budget.id, month: budget.month.month_desc, year: budget.month.year}
    return newObj
  })
    const history = useHistory()

    const options = updatedBudgets.map((budget) => 
        <option key={budget.id} value={budget.id}>{budget.month} {budget.year}</option>
        )

    const handleInputChange = e => {
        console.log(e.target.name, e.target.value)
       setTransactionInputs({
           ...transactionInputs,
           [e.target.name]: e.target.value})
    }

  const handleSubmit = e => {
      e.preventDefault()
      console.log(e.target.value)

    const newTransaction ={
          description: transactionInputs.description,
          amount: transactionInputs.amount,
          category_id: transactionInputs.category_id,
          budget_id: transactionInputs.budget_id
      }
      console.log(newTransaction)

      fetch('http://localhost:9292/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(newTransaction)
        })
        .then(() => history.push("/transactions"))
        .catch(err => alert(err))
        
  }

  return (
    <HomeContainer>
    <PopupCheckout>
        <div>Add a new transaction. </div>
        <form onSubmit={handleSubmit}>
        <label>Transaction Description:
              <input type="text" name="description" value={transactionInputs.description} maxLength={100} required onChange={handleInputChange}/>
            </label>
            <br />
            <label>Budget Month: 
                <select name="budget_id" value={transactionInputs.budget_id} required onChange={handleInputChange}>
                    <option name="default" value="default">Select Budget Month</option>
                    {options}
                </select>
            </label>
            <br/>
            <label>Amount Spent:
              <input type="decimal" name="amount" value={transactionInputs.amount} maxLength={10} required onChange={handleInputChange}/>
            </label>
            <br/>
              <button>Add Transaction</button>
        </form>
        </PopupCheckout>
    </HomeContainer>
  )
}

export default TransactionForm
