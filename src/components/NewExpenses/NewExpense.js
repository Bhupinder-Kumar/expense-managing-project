import React, { Fragment } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return(
        <Fragment>
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
        </Fragment>
    )
}

export default NewExpense;