import "./ExpenseItem.css";

function ExpenseItem() {
    
    const eName="Petrol";
    const eDate = new Date(2024,1,12);
    const eAmout = 100;
    const eLocation = "kollam"

  return (
    <div className="expense-item">
      <div>{eDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{eName}</h2>
        <h3>{eLocation}</h3>
        <div className="expense-item__price">{eAmout}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
