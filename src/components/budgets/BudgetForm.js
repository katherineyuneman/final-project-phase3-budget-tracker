import { useState, useHistory } from "react"


function BudgetForm() {
    const [month, setMonth] = useState ()
    const [amount, setAmount] = useState()

    

  return (
    <>
        <div>Add a new budget amount. </div>
        <form onSubmit={handleSubmit}>
        <label>State: 
            <select name="month" value={month} onChange={handleInputChange}>
                <option value="default">Select State</option>
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
        </form>
    </>
  )
}

export default BudgetForm
