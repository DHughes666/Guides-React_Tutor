import React from "react";
import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = new Date().toLocaleDateString();
    
    return (
        <div className="expense-item">
            <div>{props.date.toLocaleDateString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            
        </div>
    )
}

export default ExpenseItem;