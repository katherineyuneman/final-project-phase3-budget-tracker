import { useState } from "react"
import {useHistory } from "react-router-dom"
import { PopupCheckout } from "../../styled-components/styleIndex"


function TransactionForm({budgets}) {
    const [transactionInputs, setTransactionInputs] = useState ({
        description:"",
        amount:"",
        date_created: "",
        category_id: "",
        budget_id:""
    })


    const history = useHistory()

    const options = budgets.map((budget) => 
        <option key={budget.id} value={budget.id}>{budget.month}</option>
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
          date_created: transactionInputs.date_created,
          category_id: transactionInputs.category_id,
          budget_id: transactionInputs.budget_id
      }

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
    <>
    <br/>
    <br/>
    <br/>
    <br/>
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
              <button>Add Budget</button>
        </form>
        </PopupCheckout>
    </>
  )
}

export default TransactionForm
