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
            <ExpenseItem 
                date = {props.stuffs[0].date}
                title = {props.stuffs[0].title}
                amount = {props.stuffs[0].amount}
            />
            <ExpenseItem 
                date = {props.stuffs[1].date}
                title = {props.stuffs[1].title}
                amount = {props.stuffs[1].amount}
            />
            <ExpenseItem 
                date = {props.stuffs[2].date}
                title = {props.stuffs[2].title}
                amount = {props.stuffs[2].amount}
            />
            <ExpenseItem 
                date = {props.stuffs[3].date}
                title = {props.stuffs[3].title}
                amount = {props.stuffs[3].amount}
            />
        </Card> 
        
    )
}

export default Expenses;