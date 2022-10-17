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
        <ExpenseItem 
          title={props.items[0].title}
          price={props.items[0].price}
          date={props.items[0].date}
        />
        <ExpenseItem 
          title={props.items[1].title}
          price={props.items[1].price}
          date={props.items[1].date}
        />
        <ExpenseItem 
          title={props.items[2].title}
          price={props.items[2].price}
          date={props.items[2].date}
        />
        <ExpenseItem 
          title={props.items[3].title}
          price={props.items[3].price}
          date={props.items[3].date}
        />
      </Card>
    )
}

export default Expenses;