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

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}
            onSelectFilter={filterChangeHandler}/>

            {props.stuffs.map((stuff) => {
                return <ExpenseItem
                date = {stuff.date}
                title = {stuff.title}
                amount = {stuff.amount} />
            })
            }
        </Card> 
        
    )
}

export default Expenses;