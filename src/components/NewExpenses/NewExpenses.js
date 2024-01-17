import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css"

const NewExpenses = (props) => {
    const saveExpenseHandler = (addedExpense) =>{
         const expenseData = {
               ...addedExpense,
               id:Math.random().toString()
         };
         //console.log(expenseData)
         props.onAddExpense(expenseData)
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler}/>
    </div>
  );
};

export default NewExpenses;
