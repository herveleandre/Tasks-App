import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';  
import './ExpenseItem.css';//adding styling to React
import Card from './Card';
  
// className instead of class. class is taken. useState always need two values. pass title to h2
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
   

    
    //function clickHandler
    function clickHandler (){
        setTitle('Title Updated!');
        console.log(title);
        };
    //const for the month, day and year
  
    
    //props = properties - passing props to expense items for appjs

    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className=".expense-item h2">
        
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{props.amount}</div>


        <button onClick={clickHandler}>Change Event</button>
      </Card>
    );
  }
  
  export default ExpenseItem;