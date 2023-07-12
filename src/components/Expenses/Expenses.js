import React, { useState } from "react";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [inputYear, setInputYear] = useState('2020')
  const yearChanginHendeler = (setYear) => {
    setInputYear(setYear)

  }


  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === inputYear;

  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
          selected={inputYear} 
          onYearExpenses={yearChanginHendeler} 
        />
        <ExpensesChart expenses={filterdExpenses}/>
        <ExpensesList items={filterdExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses;