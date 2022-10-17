import React, { Fragment } from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const onExpenseDataSave = (entireExpenseData) => {
        const expenseData = {
            ...entireExpenseData,
            id : Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpenseHandler(expenseData);
    }
    return(
        <Fragment>
            <div className='new-expense'>
                <NewExpenseForm onSaveDataHandler={onExpenseDataSave}/>
            </div>
        </Fragment>
    )
}

export default NewExpense;