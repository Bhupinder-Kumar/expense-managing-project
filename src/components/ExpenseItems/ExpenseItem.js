import React, { Fragment, useState } from "react";
import ExpenseDate from "../ExpneseDate/ExpenseDate";
import Card from '../Cards/Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, SetTitle] = useState(props.title);

  const clickHandler = () => {
    // when user clicked on the button the title should be updated with some new content
    SetTitle("Updated!");
    console.log(title);
  }
  return (
    <Fragment>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
        <button onClick={clickHandler}>Click Me</button>
      </Card>
    </Fragment>
  );
};

export default ExpenseItem;
