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

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}
            onSelectFilter={filterChangeHandler}/>

            {filteredExpenses.map((stuff, index) => {
                return <ExpenseItem
                key = {stuff.id}
                title = {stuff.title}
                amount = {stuff.amount}
                date = {stuff.date} />
            })
            }
        </Card> 
        
    )
}

export default Expenses;