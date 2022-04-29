import { useState } from "react"
import {useHistory } from "react-router-dom"
import { PopupCheckout } from "../../styled-components/styleIndex"


function BudgetForm() {

    const [budgetInputs, setBudgetInputs] = useState ({
        month:"",
        amount:""
    })

    const history = useHistory()

    const handleInputChange = e => {
       setBudgetInputs({
           ...budgetInputs,
           [e.target.name]: e.target.value})
    }

  const handleSubmit = e => {
      e.preventDefault()
      console.log(e.target.value)

    const newBudget ={
          month: budgetInputs.month,
          amount: budgetInputs.amount
      }

      fetch('http://localhost:9292/budgets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(newBudget)
        })
        .then(() => history.push("/budgets"))
        .catch(err => alert(err))
        
        

  }

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <PopupCheckout>
        <div>Add a new budget amount. </div>
        <form onSubmit={handleSubmit}>
            <label>State: 
                <select name="month" value={budgetInputs.month} required onChange={handleInputChange}>
                    <option value="default">Select Budget Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select> 
            </label>
            <br/>
            <label>Budget Limit $
              <input type="decimal" name="amount" value={budgetInputs.amount} maxLength={10} required onChange={handleInputChange}/>
            </label>
            <br/>
              <button>Add Budget</button>
        </form>
        </PopupCheckout>
    </>
  )
}

export default BudgetForm
