import { Card } from "../../styled-components/styleIndex"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import {useHistory } from "react-router-dom"
import BudgetFormEdit from "./BudgetFormEdit"

function BudgetCard({onBudgetDelete, budget:{id, month, amount, year}}) {

    const [ PopUpisOpen, setPopUpisOpen ] = useState(false);
    const [ updatedAmount, setUpdatedAmount ] = useState(amount)

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/budgets/${id}`, {
            method: "DELETE",
        });
        
        onBudgetDelete(id)
    }

    const handlePopUp = (e) => {
        setPopUpisOpen(!PopUpisOpen)
    }

    const submitForm = (inputs) => {
        fetch(`http://localhost:9292/budgets/${inputs.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "amount": inputs.amount
                })
        })
        .then(resp => resp.json())
        .then((patchedData) => {
            console.log(patchedData)
            setPopUpisOpen(!PopUpisOpen)
            setUpdatedAmount(patchedData.amount)
        })
    }

    return (
      
        <Card>
            <Link to={`/budgets/${id}/${month}/transactions`}>
                <h1>{month} {year}</h1>
            </Link>
            <h5>${updatedAmount}</h5>
            <button name={id} onClick={handlePopUp}>Edit Budget</button>
            <button onClick={handleDeleteClick}>🗑</button>
            {PopUpisOpen && <BudgetFormEdit PopUpisOpen={PopUpisOpen} handlePopUp={handlePopUp} id={id} updatedAmount={updatedAmount} submitForm={submitForm}/>}
        </Card>
        
   
  ) 
}

export default BudgetCard