import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Navbar/Sidebar';
import '../App.css';
import '../index.css';

const Viewstud = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch student data from API when component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/student_all'); // API endpoint to get all students
                setStudents(response.data); // Set the student data in state
                setLoading(false); // Data is loaded, so set loading to false
            } catch (err) {
                setError(err.message); // Handle any errors
                setLoading(false); // Stop loading if there's an error
            }
        };

        fetchData();
    }, []);

    // Render the table or error/loading message
    return (
        <>
            <Sidebar />
            <div className="table-container">
                <h2 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>Student Records</h2>
                {loading ? (
                    <p>Loading student data...</p>
                ) : error ? (
                    <p>Error fetching data: {error}</p>
                ) : (
                    <table className="student-table">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Date of Birth</th>
                                <th>Program</th>
                                <th>Start Date</th>
                                <th>Enrollment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.stud_id}>
                                    <td>{student.stud_id}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.username}</td>
                                    <td>{student.email}</td>
                                    <td>{student.dob ? new Date(student.dob).toLocaleDateString() : 'N/A'}</td>
                                    <td>{student.program}</td>
                                    <td>{student.startDate ? new Date(student.start_date).toLocaleDateString() : 'N/A'}</td>
                                    <td>{student.entStatus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Viewstud;
