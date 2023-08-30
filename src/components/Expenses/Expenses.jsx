import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.stuffs.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}
            onSelectFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/> 
            <ExpensesList  itemContents={filteredExpenses}/>
        </Card> 
        
    )
}

export default Expenses;