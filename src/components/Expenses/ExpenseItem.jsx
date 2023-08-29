import React, { useState } from "react";
import './ExpenseItem.css';
import DateItem from "./DateItem";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    let [title, setTitle] = useState(props.title)

    const handleClick = () => {
        setTitle("Changed");
    };
    
    return (
        <Card className="expense-item">
            <DateItem date = {props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;