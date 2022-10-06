import React, { Fragment } from 'react';

const NewExpense = () => {
    return(
        <Fragment>
            <form>
                <div className='new-expense_controls'>
                    <div className='new-expense_control'>
                        <label>Title</label>
                        <input type="text" />
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default NewExpense;