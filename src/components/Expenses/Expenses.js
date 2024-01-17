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
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onchangeFilter={filterChangeHandler}/>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          
          date={expense.date}
        />
      ))}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location={props.items[0].location}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location={props.items[1].location}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location={props.items[2].location}
      /> */}
    </Card>
  );
}

export default Expenses;
