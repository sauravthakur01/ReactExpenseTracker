import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import './components/Expenses/Expenses.css'
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {
      id:'1',
      title: 'sneakers',
      amount: '499',
      date: new Date(2022 , 6 , 3)
    } ,
    {
      id:'2',
      title: 'ps5',
      amount: '1000',
      date: new Date(2022 , 8 , 9)
    } 
    
  ]

  const[oldExpense , setAddExpense] = useState(expenses)

  const addExpenseHandler = (expense)=>{
    setAddExpense((prev)=>{
      return [ expense , ...prev]
    })
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={oldExpense}></Expenses>
    </div>
  );
}

export default App;
