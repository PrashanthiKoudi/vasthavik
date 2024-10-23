import React, { useState } from 'react';
import Sidebar from "./Navbar/Sidebar";
import "../App.css";
import "../index.css";
import axios from "axios";
import {
    AboutUs,
    OurAim,
    OurVision,
} from "./AboutUs";

const Addstud = () => {
    // State to store form data
    const userData = JSON.parse(localStorage.getItem("loginData"));
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        dob: "",
        program: "",
        startDate: "",
        entStatus: "",
        univ_id: userData ? userData.univ_id : ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            // Sending data to the API using axios POST request


            const response = await axios.post("http://127.0.0.1:5000/post_addstud", formData);
            console.log("Response Data: ", response.data);

            // Handle successful submission, e.g., show a message or clear form
            alert("Student data submitted successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                password: "",
                email: "",
                dob: "",
                program: "",
                startDate: "",
                entStatus: "",
                univ_id: userData ? userData.univ_id : "" 
            });

        } catch (error) {
            // Handle errors
            console.error("There was an error submitting the form!", error);
            alert("Failed to submit student data.");
        }
    };
    return (
        <>
            <Sidebar />
            <div className="form-container">
                <div className="form-box">
                <h2 style={{ 
    textAlign: "center", 
    marginTop: "20px",   // Space above the heading
    marginBottom: "20px" // Space below the heading, adding space to the next div
}}>
    Student Details Form
</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>First Name: </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Last Name: </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email: </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Date of Birth: </label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Program: </label>
                            <input
                                type="text"
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Start Date: </label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Enrollment Status: </label>
                            <select
                                name="entStatus"
                                value={formData.entStatus}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select status</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Graduated">Graduated</option>
                            </select>
                        </div>

                        <button 
    type="submit"
    style={{ 
        display: "block",       // Ensures the button is treated as a block-level element
        margin: "20px auto",    // Centers the button horizontally
        padding: "10px 20px",   // Adds some padding for a better appearance
        textAlign: "center"     // Centers the text inside the button
    }}
>
    Create Student Account
</button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Addstud;
