
import Card from "../UI/Card";
import "./Expenses.css";
import React ,{ useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
 
  const [filteredYear,setFilteredYear] = useState('2024')
  
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  })

  
  return (
     <li>
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onchangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses = {filteredExpenses} />
      <ExpenseList items={filteredExpenses}/>
      
    </Card>
    </li>
  );
}

export default Expenses;
