import Expenses from "./components/Expenses";

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
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
