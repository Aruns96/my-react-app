import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "petrol",
      amount: "100",
      date: new Date(2024, 1, 12),
      location: "kollam",
    },
    {
      id: "e2",
      title: "food",
      amount: "200",
      date: new Date(2023, 4, 12),
      location: "ctnr",
    },
    {
      id: "e3",
      title: "movie",
      amount: "300",
      date: new Date(2023, 6, 2),
      location: "kochi",
    },
  ];
  const e =[]
  for(let i=0;i<expenses.length;i++){
    e.push(<ExpenseItem 
      title={expenses[i].title}
        amount={expenses[i].amount}
        date={expenses[i].date}
        location={expenses[i].location}
    />)
  }
  return (
    
    <div>
     
      <h2>Let's get started!</h2>
      {e}
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].location}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
