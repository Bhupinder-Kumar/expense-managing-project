import React, { Fragment, useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = () => {
    const [enteredTite, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const amountHandler = e => {
        setEnteredAmount(e.target.value);
    }

    const dateHandler = e => {
        setEnteredDate(e.target.value);
    }
    return(
        <Fragment>
            <form>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type={enteredTite} onChange={titleHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={amountHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateHandler}/>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default NewExpenseForm;