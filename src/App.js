import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import React , { useState } from "react";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "petrol",
    amount: "100",
    date: new Date(2023, 1, 12)
   
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
function App() {
 
  const [expenses,setExpenses] = useState(DUMMY_DATA)
  

 
   const addExpenseHandler = (exp) =>{
    
     setExpenses(prevData=>{
        return [exp,...prevData]
     })
    
     
      
   }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
      
        
    </div>
  );
}

export default App;
