import React from "react";
import './DateItem.css';

const DateItem = (props) => {
    const month = props.Ndate.toLocaleString('en-US', {month: 'long'});
    const day = props.Ndate.toLocaleString('en-US', {day: '2-digit'});
    const year = props.Ndate.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default DateItem;