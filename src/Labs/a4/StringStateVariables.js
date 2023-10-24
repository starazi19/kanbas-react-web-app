import React, { useState } from "react";
function StringStateVariables() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Smith");
    return (
        <div>
            <h2>String State Variables</h2>
            <p>{firstName} {lastName}</p>
            <label className="form-control"> First Name: 
                <input type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
            </label>

            <label className="form-control"> Last Name:
                <input type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
            </label>
        </div>
    );
}

export default StringStateVariables;