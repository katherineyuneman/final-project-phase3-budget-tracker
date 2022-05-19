import {useState, useEffect} from 'react'
import { format } from 'date-fns'
import { Card, Container } from '../../styled-components/styleIndex'

function DashboardRecent() {

    const [ recentTransactions, setRecentTransactions ] = useState([])


    useEffect(() => {
    fetch (`http://localhost:9292/transactions/recent`)
        .then(response => response.json())
        .then(data => {
            setRecentTransactions(data)
        })
        .catch(err => alert(err))

    },[])

    const recentTransactionsMapped = recentTransactions.map((transaction) => {
    const formattedDate = format(new Date(transaction.created_at), 'yyyy-MM-dd')
    const formattedTime = format(new Date(transaction.created_at),'pp')

    return (
        
        <Card key={transaction.id}>
            <h1>${transaction.amount}</h1>
            <h2>{transaction.description}</h2>
            <h5>
                {formattedDate}
                < br/>
                {formattedTime}
                <br />
            </h5>
        </Card>
    ) 
    })


  return (
    <div>
        <Container>
            {recentTransactionsMapped}
      </Container>
    </div>
    )
}

export default DashboardRecent
