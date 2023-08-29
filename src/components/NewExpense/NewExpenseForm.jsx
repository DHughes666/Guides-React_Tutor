import React, { useState } from "react";
import './NewExpenseForm.css';

const NewExpenseForm = () => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')

    const defDate = new Date()
    const [date, setDate] = useState(defDate)

    const handleTitleChange = (event) => {
        const value = event.target.value
        setTitle(value);
    }

    const handleAmountChange = (event) => {
        const value = event.target.value
        setAmount(value);
    }

    const handleDateChange = (event) => {
        const value = event.target.value
        setDate(value);
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={handleTitleChange}
                value={title}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step='0.01' 
                    onChange={handleAmountChange} value={amount}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2024-12-31"
                onChange={handleDateChange} value={date.toISOString().split('T')[0]} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default NewExpenseForm;