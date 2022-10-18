import React, { useState } from 'react';
import ExpenseItem from '../ExpenseItems/ExpenseItem';
import Card from '../Cards/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHanlder = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
    return(
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHanlder}/>
        {props.items.map((expense) => (
        <ExpenseItem 
          title={expense.title}
          price={expense.price}
          date={expense.date}
          />
        ))}
      </Card>
    )
}

export default Expenses;