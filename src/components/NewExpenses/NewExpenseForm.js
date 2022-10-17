import React, { Fragment, useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // another way to write multipl states --> 

    // const [userInput, setUserInput] = useState ({
    //     enteredTitle : '',
    //     setEnteredAmount : '',
    //     setEnteredDate : '' 
    // })

    const titleHandler = (e) => {
        setEnteredTitle(e.target.value);
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

    const amountHandler = e => {
        setEnteredAmount(e.target.value);
    }

    const dateHandler = e => {
        setEnteredDate(e.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); 

        const expeseData = {
            title : enteredTitle,
            ammount : Number(enteredAmount),
            date : new Date(enteredDate)
        }

        // console.log(expeseData);
        props.onSaveDataHandler(expeseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
        <Fragment>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateHandler}/>
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