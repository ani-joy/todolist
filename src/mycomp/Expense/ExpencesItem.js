import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

import React, { useState } from 'react';
function ExpencesItem(props) {
    const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle('update!!');
        console.log(title);
    };
    return (
        <div className="expense-item">

            <ExpenseDate date={props.date} />

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amt}</div>
                <button onClick={clickHandler}>click me</button>
            </div>
        </div>
    );
}

export default ExpencesItem; 