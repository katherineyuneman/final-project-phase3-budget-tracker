import TransactionCard from "./TransactionCard"
import { Container } from "../../styled-components/styleIndex"

function TransactionsList({onTransactionDelete, transactions}) {
    const eachTransaction = 
  transactions.map((transaction) => 
    <TransactionCard
      key={transaction.id}
      transaction={transaction}
      onTransactionDelete={onTransactionDelete}
    />)

  return (
    <div>
      <Container>
      {eachTransaction}
      </Container>
    </div>
  )
}

export default TransactionsList
