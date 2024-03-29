import React , { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle , setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enterdDate, setEnteredDate] = useState("")

  // const [userInput,setUserInput] = useState({
  //   enteredTitle:"",
  //   enteredAmount:"",
  //   enteredDate:""
  // })
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:e.target.value
    // })
    // setUserInput((prevState)=>{
    //    return {...prevState,enteredTitle:e.target.value}
    // })
   
  };
  const amountChangeHandler =(e) =>{
     setEnteredAmount(e.target.value)
    //  setUserInput({
    //   ...userInput,
    //   enteredAmount:e.target.value
    // })
  }
  const dateChangeHandler = (e)=>{
     setEnteredDate(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate:e.target.value
    // })
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    const expenseData = {title:enteredTitle,amount:enteredAmount,date:new Date(enterdDate) }
    
    props.onSaveExpense(expenseData)

    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
          
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input type="date" min="2024-01-01" max="2026-12-31" onChange={dateChangeHandler} value={enterdDate}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button  type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
