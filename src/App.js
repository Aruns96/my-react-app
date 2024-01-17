import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import React , { useState } from "react";

function App() {
  const addexpenses = [
    {
      id: "e1",
      title: "petrol",
      amount: "100",
      date: new Date(2024, 1, 12)
     
    },
    {
      id: "e2",
      title: "food",
      amount: "200",
      date: new Date(2023, 4, 12)
    
    },
    {
      id: "e3",
      title: "movie",
      amount: "300",
      date: new Date(2023, 6, 2)
      
    },
  ];
  const [expense,setExpense] = useState(addexpenses)
  

 
   const addExpenseHandler = (expenseAdded) =>{
     // console.log(expenseAdded);
     // console.log([...expenses,expenseAdded])
     // expenses = [...expenses,expenseAdded]
     setExpense(prevData=>[...prevData,expenseAdded])
    
     
      
   }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items={expense} />
      
        
    </div>
  );
}

export default App;
