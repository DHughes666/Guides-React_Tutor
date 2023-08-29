import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);

    }

    const filteredExpenses = props.stuffs.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expensesContent = <p>No expenses found.</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((stuff) => {
            return <ExpenseItem
            key = {stuff.id}
            title = {stuff.title}
            amount = {stuff.amount}
            date = {stuff.date} />
    })
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}
            onSelectFilter={filterChangeHandler}/>
            {expensesContent}
        </Card> 
        
    )
}

export default Expenses;