import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)
    
    const saveExpenseDataHandler = (enterdExpenseData) => {

        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
        setIsEditing(false)

    }

    const stratEditingHandeler = () => {
        setIsEditing(true)
    }
    const stopEditingHandeler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={stratEditingHandeler}>Add New Expense</button>}
            {isEditing && <ExpenseForm stopEditing={stopEditingHandeler} onSaveExpenseData={saveExpenseDataHandler}/>}

        </div>
    );

}

export default NewExpense;