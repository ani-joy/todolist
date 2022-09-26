import './ExpenseForm.css';
import React, { useState } from 'react';
function ExpenseForm(props) {
    const [currenttitle, settitle] = useState('');
    const [currentamt, setamt] = useState('');
    const [currentdate, setdate] = useState('');


    const clickhandler = (event) => {
        settitle(event.target.value);
    };

    const amthandler = (event) => {
        setamt(event.target.value);
    };
    const datehandel = (event) => {
        setdate(event.target.value);
    };

    const submithandel = (event) => {
        event.preventDefault();
        const expenseData = {
            id: Math.random().toString(),
            title: currenttitle,
            date: new Date(currentdate),
            amt: currentamt
        };
        props.onSaveExpenseData(expenseData);
        settitle('');
        setamt('');
        setdate('');
    };
    return (
        <form onSubmit={submithandel}>
            <div className="new-expense">
                <div className="new-expense__controls">
                    <div classNmae="new-expense__control">
                        <label>
                            title
                            <input type="text" onChange={clickhandler} value={currenttitle}></input>
                        </label>
                    </div>
                    <div className="new-expense__control">
                        <label>
                            amount
                            <input type='number' min='0.01' step='0.01' value={currentamt} onChange={amthandler}></input>
                        </label>
                    </div>
                    <div className="new-expense__control" >
                        <label>date</label>
                        <input type='date' min='01-01-2018' max='01-01-2024' value={currentdate} onChange={datehandel} ></input>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">ADD Expenses</button>
                </div>
            </div>

        </form>


    );
}

export default ExpenseForm;