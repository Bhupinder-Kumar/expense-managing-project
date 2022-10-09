import React, { Fragment } from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css'

const NewExpense = () => {
    return(
        <Fragment>
            <div className='new-expense'>
                <NewExpenseForm />
            </div>
        </Fragment>
    )
}

export default NewExpense;