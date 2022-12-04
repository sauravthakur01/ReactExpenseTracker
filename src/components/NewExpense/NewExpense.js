import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';


const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);
    
    const saveExpenseHandler = (data) =>{
        const expensedata = {
            ...data,
            id: Math.random().toString()
        }
        // console.log(expensedata)
        props.onAddExpense(expensedata)
        setIsEditing(false);
    }

    const startEditingHandler = ()=>{
      setIsEditing(true)
    }

    const stopEditing = ()=>{
      setIsEditing(false)
    }

  return (
    <div className="new-expense">
      {!isEditing && (<button onClick={startEditingHandler}>
        Add NewExpense
      </button>)}
      
      {isEditing && (<ExpenseForm saveExpense={saveExpenseHandler} onClick={stopEditing} />)}
       
    </div>
  )
}

export default NewExpense