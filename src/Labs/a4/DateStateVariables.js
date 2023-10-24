import React, { useState } from "react";
function DateStateVariable() {
    const [startDate, setStartDate] = useState(new Date());
    const dateObjectToHTMLDateString = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
            date.getMonth() + 1}-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate()}`;
    };
    return (
        <div>
            <h2>Date State Variables</h2>
            <h3>{JSON.stringify(startDate)}</h3>
            <h3>{dateObjectToHTMLDateString(startDate)}</h3>
            <label className="form-control"> Start Date:
                <input type="date"
                    value={dateObjectToHTMLDateString(startDate)}
                    onChange={(e) => setStartDate(new Date(e.target.value))} />
            </label>
        </div>
    );
    
}
export default DateStateVariable;