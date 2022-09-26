import React from "react";
function ExpenseFilter(props)
{
    const dropdownChangeHandler=(event)=>
    {
        props.onChangeFilter(event.target.value);
    };
   return(
    <div>
        <div>
            <label>
                Filter by year
            </label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2023'>2023</option>
            </select>
        </div>
    </div>
   );
}
export default ExpenseFilter;