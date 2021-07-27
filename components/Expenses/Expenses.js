import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';
// const Expenses = (props) => {}
function Expenses(props){
 const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHanlder = selectedYear => {
    // console.log('Expenses.js');
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  }
   
    return(
      <div>
       
      <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear}
        onChangeFilter={filterChangeHanlder}
        />
        
   {props.item.map((expense) => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />    
      ))}  

      {/* <ExpenseItem 
      title={props.items[0].title} 
      amount={props.items[0].amount} 
      date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}

        </Card>
        </div>
    )
}

export default Expenses;