import { useState, useEffect } from "react"
import {useHistory } from "react-router-dom"
import { PopupCheckout } from "../../styled-components/styleIndex"


function BudgetForm() {

    const [ userOptions, setUserOptions ] = useState([])
    const [ monthOptions, setMonthOptions ] = useState([])

    const [budgetInputs, setBudgetInputs] = useState ({
        amount:"",
        month_id:"",
        user_id:""
    })

    useEffect(() => {
        fetch ('http://localhost:9292/users')
        .then(response => response.json())
        .then(data => setUserOptions(data))
        .catch(err => alert(err))

        fetch ('http://localhost:9292/months')
        .then(response => response.json())
        .then(data => setMonthOptions(data))
        .catch(err => alert(err))
      }
      
      
      
      ,[])

    const history = useHistory()

    const handleInputChange = e => {
       setBudgetInputs({
           ...budgetInputs,
           [e.target.name]: e.target.value})
           console.log(budgetInputs)
    }

  const handleSubmit = e => {
      e.preventDefault()
      console.log(e.target.value)

    const newBudget ={
          month_id: budgetInputs.month_id,
          amount: budgetInputs.amount,
          user_id: budgetInputs.user_id
      }

      console.log(newBudget)
      debugger;

      fetch('http://localhost:9292/budgets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(newBudget)
        })
        // .then(() => history.push("/budgets"))
        .catch(err => alert(err))
  }

  const monthDropDownOptions = monthOptions.map((month) => 
        <option key={month.id} value={month.id}>{month.month_desc} {month.year}</option>
        )

    const userDropDownOptions = userOptions.map((user) => 
        <option key={user.id} value={user.id}>{user.first_name} {user.last_name}</option>
        )
        
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
                <select name="month_id" value={budgetInputs.budget_id} required onChange={handleInputChange}>
                    <option value="default">Select Budget Month</option>
                    {monthDropDownOptions}
                </select>
            </label> 
            <br/>
            <label>Budget Limit $
              <input type="decimal" name="amount" value={budgetInputs.amount} maxLength={10} required onChange={handleInputChange}/>
            </label>
            <br/>
            <label>User:
                <select name="user_id" value={budgetInputs.budget_id} required onChange={handleInputChange}>
                    <option name="default" value="default">Select User</option>
                    {userDropDownOptions}
                </select>
            </label>
            <br/>
              <button>Add Budget</button>
        </form>
        </PopupCheckout>
    </>
  )
}

export default BudgetForm
