import './ExpenseItem.css'
import React ,{ useState }from 'react';
const ExpenseDetails = (props) => {
  const [title,setTitle] = useState(props.title)
  const [addAmount,setAddAmout] = useState(props.amount)
  const clickHandler = () => {
    setTitle("new")
    console.log(title)
  }
  const addHanler = () => {
   setAddAmout("$100")
  }
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h3>{props.location}</h3>
      <div className="expense-item__price">{addAmount}</div>
      <button onClick={clickHandler}>click</button>
      <button onClick={addHanler}>add</button>
    </div>
  );
}
export default ExpenseDetails;
