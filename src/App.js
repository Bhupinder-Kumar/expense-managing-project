import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id : 'e1',
      title : 'Car Insurance',
      date : new Date(),
      price : 456.95
    },
    {
      id : 'e2',
      title : 'Wooden Insurance',
      date : new Date(),
      price : 342.55
    },
    {
      id : 'e3',
      title : 'Tv Insurance',
      date : new Date(),
      price : 346.45
    },
    {
      id : 'e4',
      title : 'Bike Insurance',
      date : new Date(),
      price : 786.95
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
          title={expenses[0].title} 
          price={expenses[0].price} 
          date={expenses[0].date} 
      />
      <ExpenseItem 
          title={expenses[1].title} 
          price={expenses[1].price} 
          date={expenses[1].date} 
      />
      <ExpenseItem 
          title={expenses[2].title} 
          price={expenses[2].price} 
          date={expenses[2].date} 
      />
      <ExpenseItem 
          title={expenses[3].title} 
          price={expenses[3].price} 
          date={expenses[3].date} 
      />
    </div>
  );
}

export default App;
