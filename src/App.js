import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expenses from "./static_expenses";

const App = () => {

  const handlerForExpense = (transExpense) => {
    console.log(transExpense);
  }
  
  return (
    <div>
      <NewExpense onAddExpense={handlerForExpense} />
      <Expenses stuffs = {expenses}/>
      
    </div>
  );
}

export default App;
