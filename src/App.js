import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expenses from "./static_expenses";

const App = () => {
  
  return (
    <div>
      <NewExpense />
      <Expenses stuffs = {expenses}/>
      
    </div>
  );
}

export default App;
