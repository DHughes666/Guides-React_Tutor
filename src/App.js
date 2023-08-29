import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Macbook Pro',
      amount: 1264.07,
      date: new Date(),
    },
    {
      id: 'e4',
      title: 'Hosting subscription',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses stuffs = {expenses}/>
      
    </div>
  );
}

export default App;
