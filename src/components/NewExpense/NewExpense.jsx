import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';


const NewExpense = (props) => {
    const handleSaveExpenseData = (filledExpenseData) => {
        const expenseData = {
            ...filledExpenseData, id: Math.random().toString() 
        };
        
        props.onAddExpense(expenseData);
    };

    return <div className='new-expense'>
        <NewExpenseForm onSave={handleSaveExpenseData} />
    </div>
}

export default NewExpense;