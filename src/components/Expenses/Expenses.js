
import ExpenseFilter from "../NewExpense/ExpenseFilter"
import './Expenses.css'
import Card from '../UI/Card'
import { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = ({expenses}) => {

  const [filteredYear , setFilteredYear] = useState('2022')
  

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }

  const filteredExpense = expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  })

  
  return (
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    <ExpensesChart expenses={filteredExpense}/>
    <ExpensesList item={filteredExpense}/>
    </Card>
  )
}

export default Expenses