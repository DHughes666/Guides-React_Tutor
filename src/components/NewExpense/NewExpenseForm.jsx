import React, { useState } from "react";
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    // const [title, setTitle] = useState('')
    // const [amount, setAmount] = useState('')
    // const [date, setDate] = useState('')

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    })

    const handleTitleChange = (event) => {
        const value = event.target.value
        // setUserInput({
        //     ...userInput,
        //     title: value,
        // });
        setUserInput((prevState) => {
            return {
                ...prevState, title: value
            }
        });
    }

    const handleAmountChange = (event) => {
        const value = event.target.value
        // setUserInput({
        //     ...userInput,
        //     amount: value,
        // });
        setUserInput((prevState) => {
            return {
                ...prevState, amount: value
            }
        });
    }

    const handleDateChange = (event) => {
        const value = event.target.value
        // setUserInput({
        //     ...userInput,
        //     date: value,
        // });
        setUserInput((prevState) => {
            return {
                ...prevState, date: value
            }
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.title,
            amount: userInput.amount,
            // When adding dates please dont forget to use the 'new Date' 
            date: new Date(userInput.date)
        }

        props.onSave(expenseData);
    }

    return <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={handleTitleChange}
                value={userInput.title}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step='0.01' 
                    onChange={handleAmountChange} value={userInput.amount} />
                
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2024-12-31"
                onChange={handleDateChange} value={userInput.date} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default NewExpenseForm;