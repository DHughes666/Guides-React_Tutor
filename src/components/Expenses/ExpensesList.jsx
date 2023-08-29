import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.itemContents.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found.</h2>
    } 

    return <ul className='expenses-list'>
        {props.itemContents.map((stuff) => {
            return <ExpenseItem
            key = {stuff.id}
            title = {stuff.title}
            amount = {stuff.amount}
            date = {stuff.date} />
    })}
    </ul>
}

export default ExpensesList;