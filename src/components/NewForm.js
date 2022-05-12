import React from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer } from '../styled-components/styleIndex'

function NewForm() {
  return (
    <div>
      < br/>
      < br/>
      <HomeContainer>
      <Link to={"/budgets/new"}>
        <button>Add New Budget {'>>'} </button>
      </Link>
      <br />
      <br/>
      <Link to={"/transactions/new"}>
        <button>Add New Transaction {'>>'} </button>
      </Link>
      </HomeContainer>
    </div>
  )
}

export default NewForm
