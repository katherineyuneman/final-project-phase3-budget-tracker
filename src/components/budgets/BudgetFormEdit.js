import { useState, useEffect } from 'react'
import { PopupCheckout } from '../../styled-components/styleIndex'

function BudgetFormEdit({submitForm, PopUpisOpen, handlePopUp, id, updatedAmount}) {

    const [amountUpdateInputs, setAmountUpdateInputs] = useState ({
        amount: updatedAmount,
        id: id
    })

    const handleInputChange = (e) => {
        setAmountUpdateInputs({amount: e.target.value, id: id})
    }



  return (
    <PopupCheckout>
         <form onSubmit={(e) =>{
            e.preventDefault();
            submitForm(amountUpdateInputs)
        }}>
            <label>Edit Budget Limit $
                <input onChange={handleInputChange} type="decimal" name="amount" value={amountUpdateInputs.amount} maxLength={10} required/>
            </label>
            <button>Save Changes</button>
        </form>
    </PopupCheckout>
  )
}

export default BudgetFormEdit
