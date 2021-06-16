import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () =>{
    return (
            // <form></form> moved to ExpenseForm.js
            <div className="new-expense">
                <ExpenseForm />
            </div>
            )
    }
export default NewExpense;