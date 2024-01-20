import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css"
import React ,{ useState } from "react";

const NewExpenses = (props) => {
     const [isEditing,setIsEditing]=useState(false)
    const saveExpenseHandler = (addedExpense) =>{
         const expenseData = {
               ...addedExpense,
               id:Math.random().toString()
         };
         //console.log(expenseData)
         props.onAddExpense(expenseData);
         setIsEditing(false)
    }
    const editingHandler =()=>{
      setIsEditing(true)
    }
    const cancelHandler =()=>{
      setIsEditing(false)
    }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={cancelHandler}/>}
    </div>
  );
};

export default NewExpenses;
