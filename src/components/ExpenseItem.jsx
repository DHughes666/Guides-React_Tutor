import React from "react";
import './ExpenseItem.css';
import DateItem from "./DateItem";

function ExpenseItem(props) {
    
    return (
        <div className="expense-item">
            <DateItem 
                date = {props.date}
            />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            
        </div>
    )
}

export default ExpenseItem;