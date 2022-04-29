import TransactionCard from "./TransactionCard"
import { Container } from "../../styled-components/styleIndex"

function TransactionsList({transactions}) {
    const eachTransaction = 
  transactions.map((transaction) => 
    <TransactionCard
      key={transaction.id}
      transaction={transaction}
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
