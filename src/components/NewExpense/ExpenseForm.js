
import './ExpenseForm.css';
import { useState } from 'react';



function ExpenseForm(){

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

function titleChangeHandler(event){
    setEnteredTitle(event.target.value);
};

function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
};

function dateChangeHandler(event){
    setEnteredDate(event.target.value);
};



return (
  <form>
    <div className="new-expense__controls">
      <div className="new-expense__controls">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler}></input>
      </div>
      <div className="new-expense__controls">
        <label>Amount</label>
        <input type="number" onChange={amountChangeHandler} min='0.01' step='0.01'></input>
      </div>
      <div className="new-expense__controls">
        <label>Date</label>
        <input type="date" onChange={dateChangeHandler} min='2019-01-01' max='2025-12-31'></input>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </div>
  </form>
);

};

export default ExpenseForm;