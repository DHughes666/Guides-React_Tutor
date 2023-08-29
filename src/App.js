import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expenses from "./static_expenses";

const App = () => {

  const [presentData, setNewData] = useState(expenses);

  const handlerForAddExpense = (transExpense) => {
    setNewData((prevData) => {
      return [
        transExpense, ...prevData
      ]
      
    })
  }
  
  return (
    <div>
      <NewExpense onAddExpense={handlerForAddExpense} />
      <Expenses stuffs = {presentData}/>
      
    </div>
  );
}

export default App;
