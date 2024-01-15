import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

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

  return (
    <div>
      <NewExpenses />
      <Expenses items={expenses} />
      
        
    </div>
  );
}

export default App;
