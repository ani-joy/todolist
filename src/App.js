import './App.css';
import React, { useState } from 'react';
import ExpencesItem from './mycomp/Expense/ExpencesItem';
import ExpenseForm from './mycomp/Expense/NewExpense/ExpenseForm';
import ExpenseFilter from './mycomp/Expense/NewExpense/ExpenseFilter';
const DummyExpense = [
  {
    id: 'e1',
    title: 'car',
    amt: '1000',
    date: new Date(2023, 21, 9),
  },
  {
    id: 'e2',
    title: 'bike',
    amt: 500,
    date: new Date(2022, 21, 9),
  },
  {
    id: 'e3',
    title: 'cycle',
    amt: 250,
    date: new Date(2020, 21, 9),
  },
  {
    id: 'e4',
    title: 'plane',
    amt: 1000000,
    date: new Date(2022, 21, 9),
  },
  {
    id: 'e5',
    title: 'book',
    amt: 10.50,
    date: new Date(2021, 21, 9),
  },

];


function App() {
  const [expenses, setExpense] = useState(DummyExpense);

  const saveData = (currentData) => {
    // const expenseData = {
    //   ...currentData,
    //   id: Math.random().toString()
    // };
    //console.log(currentData);

    const tempExpense = [...expenses]
    // console.log(tempExpense)
    tempExpense.push(currentData)
    setExpense(tempExpense)
  };

  const[filteredYear, setFilteryear]=useState('2020');
   const changeFilterHandler=(selectedYear)=>
   {
     console.log(selectedYear);
     setFilteryear(selectedYear);
   };
   const filteredExpenses=DummyExpense.filter(expenses=>{
    return expenses.date.getFullYear().toString()===filteredYear;
   });

  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveData}></ExpenseForm>
      <ExpenseFilter  selected={filteredYear} onChangeFilter={changeFilterHandler}></ExpenseFilter>
      {filteredExpenses.length===0 ?(<p>no expenses to display</p>):(filteredExpenses.map((expenses) => (
        <ExpencesItem
          key={expenses.id}
          title={expenses.title}
          date={expenses.date}
          amt={expenses.amt}

        ></ExpencesItem>
      )))}
      {/* {filteredExpenses.map((expenses) => (
        <ExpencesItem
          key={expenses.id}
          title={expenses.title}
          date={expenses.date}
          amt={expenses.amt}

        ></ExpencesItem>
      ))} */}
      {/* <ExpencesItem
        title={expense[0].title}
        date={expense[0].date}
        amt={expense[0].amt}

      ></ExpencesItem>

      <ExpencesItem
        title={expense[1].title}
        date={expense[1].date}
        amt={expense[1].amt}

      ></ExpencesItem>

      <ExpencesItem
        title={expense[2].title}
        date={expense[2].date}
        amt={expense[2].amt}

      ></ExpencesItem>

      <ExpencesItem
        title={expense[3].title}
        date={expense[3].date}
        amt={expense[3].amt}

      ></ExpencesItem> */}
    </div>
  );
};

export default App
