import React, { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';


const NewExpense = (props) => {
    const [edit, setEdit] = useState(false)

    const handleSaveExpenseData = (filledExpenseData) => {
        const expenseData = {
            ...filledExpenseData, id: Math.random().toString() 
        };
        
        props.onAddExpense(expenseData);
        setEdit(false)
    };

    const handleEdit = () => {
        setEdit(true);
    }

    const handleStopEdit = () => {
        setEdit(false);
    }

    return <div className='new-expense'>
        {edit && <NewExpenseForm 
        onSave={handleSaveExpenseData} 
        onCancel={handleStopEdit}/>}
        {!edit && <button type='submit' 
        onClick={handleEdit}>Add New Expense</button>}
    </div>
}

export default NewExpense;