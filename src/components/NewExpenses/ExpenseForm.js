import React, { Fragment, useState } from 'react';
import './ExpenseForm.css';

const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // another way to write multipl states --> 

    // const [userInput, setUserInput] = useState ({
    //     enteredTitle : '',
    //     setEnteredAmount : '',
    //     setEnteredDate : '' 
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : e.target.value
        // })

        // another alternative to catting state inside of function

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle : e.target.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); 

        const expeseData = {
            title : enteredTitle,
            price : Number(enteredPrice),
            date : new Date(enteredDate)
        }

        // console.log(expeseData);
        props.onSaveExpenseData(expeseData);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
    }
    return(
        <Fragment>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" value={enteredPrice} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
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