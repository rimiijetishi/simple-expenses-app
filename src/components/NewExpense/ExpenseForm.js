import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enterdTitle, setEnterdTitle] = useState('')
    const [enterdAmount, setEnterdAmount] = useState('')
    const [enterdDate, setEnterdDate] = useState('')


    const titleChangeHandler = (event) => {
        setEnterdTitle(event.target.value)

    };


    const amountChangeHandler = (event) => {
        setEnterdAmount(event.target.value)

    };


    const dateChangeHandler = (event) => {
        setEnterdDate(event.target.value)

    };



    const submitHandeler = (event) => {
        event.preventDefault();


        const expenseData = {
            title: enterdTitle,
            amount: +enterdAmount,
            date: new Date(enterdDate)
        }


        props.onSaveExpenseData(expenseData)
        setEnterdTitle('')
        setEnterdAmount('')
        setEnterdDate('')

    };


    return (

        <form onSubmit={submitHandeler}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>title</label>
                    <input
                        type='text'
                        value={enterdTitle}
                        onChange={titleChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enterdAmount}
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enterdDate}
                        onChange={dateChangeHandler}
                    />
                </div>

            </div>
            <div className='new-expense__actions'>
                <button onClick={props.stopEditing} type='button'>cancel</button>
                <button type='submit'>Add Expenses</button>
            </div>

        </form>
    );

};

export default ExpenseForm;