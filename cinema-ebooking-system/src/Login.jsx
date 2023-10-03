import React, { useState } from "react";

export default function App() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    
    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        if(formData.username && formData.password) {
            console.log("Successfully logged in");
        } else {
            console.log("Username or Password is missing");
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username"
                    className="form--input"
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <button 
                    className="form--submit"
                >
                    Log In
                </button>
            </form>
        </div>
    )
}