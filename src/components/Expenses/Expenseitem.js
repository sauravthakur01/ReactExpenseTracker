import { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
import './Expneseitem.css'

export default function Expenseitem({amount , date , title}) {

  // const [oldtitle , setTitle]  = useState(title)

  // const clickHandler = ()=>{
  //   setTitle('updated value') 
  // }

  return (
    <li>
      <Card className="expense-item" >
      <ExpenseDate date={date} />
      <ExpenseDetails amount={amount} title={title} />
      {/* <button onClick = {clickHandler} >Change Item</button> */}
    </Card>
    </li>
  
    
  )
}
