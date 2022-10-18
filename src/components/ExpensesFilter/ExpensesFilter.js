import React, { Fragment } from "react";
import '../ExpensesFilter/ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropDownChangeHanlder = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return(
        <Fragment>
            <div className="expenses-filter">
                <div className="expenses-filter_control">
                    <label>Filter By Year</label>
                    <select value={props.selected} onChange={dropDownChangeHanlder}>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                </div>
            </div>
        </Fragment>
    )
}

export default ExpensesFilter;