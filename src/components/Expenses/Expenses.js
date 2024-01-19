import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import React ,{ useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  // const rows =[];
  // for(let i=0;i<props.items.length;i++){
  //   rows.push(<ExpenseItem title={props.items[i].title} amount={props.items[i].amount} date={props.items[i].date} />)
  // }
  //console.log(rows)
  const [filteredYear,setFilteredYear] = useState('2024')
  
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  })
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onchangeFilter={filterChangeHandler}/>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      
    </Card>
  );
}

export default Expenses;
