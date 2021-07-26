import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
    // const expenseDate = new Date(2021, 4, 30);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const year = props.date.getFullYear();

    //array desctructuring [ ]
   const [title, setTitle] = useState(props.title);
//    console.log('ExpenseItem evaluated by React');
   
    
    // const clickHandler = () =>{
    //     setTitle('Updated!');
    //     console.log(title);
    // }

    return (
        <Card className="expense-item">
            <div>
                {/* <div>Month</div> */}
                <ExpenseDate date={props.date}></ExpenseDate>
               
            </div>
            <div className="expense-item__description">
                {/* <h2>{props.title}</h2> */}
                <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title </button> */}
        </Card>
    );
    
}


export default ExpenseItem;