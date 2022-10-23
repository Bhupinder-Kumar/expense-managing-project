import React, { useState } from "react";
import Expenses from "././components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const Dummy_Expenses = [
  {
    id : 'e1',
    title : 'Car Insurance',
    price : 456.95,
    date : new Date(2018, 5, 12)
  },
  {
    id : 'e2',
    title : 'Wooden Insurance',
    price : 342.55,
    date : new Date(2019, 6, 28)
  },
  {
    id : 'e3',
    title : 'Tv Insurance',
    price : 346.45,
    date : new Date(2020, 2, 23)
  },
  {
    id : 'e4',
    title : 'Bike Insurance',
    price : 786.95,
    date : new Date(2021, 8, 26)
  }
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);
  

  const addExpenseHandler = (expense) => {
    // console.log('app.js');
    // console.log(expense);

    setExpenses((prevExpneses) => {
      return [expense, ...prevExpneses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
