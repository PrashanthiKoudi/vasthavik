import React, { useState } from 'react';
import Sidebar from './Navbar/Sidebar';

const Issuecerti = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        grade: '',
        stud_id: '',
        program: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);

        // Here you can send data to your API (e.g., using fetch or axios)
        // Example:
        // axios.post('http://127.0.0.1:5000/issue_certificate', formData)
        //     .then(response => console.log(response.data))
        //     .catch(error => console.error('Error:', error));
    };

    return (
        <>
        <Sidebar />

        <div style={styles.container}>
            <h2 style={styles.heading}>Issue Certificate</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                {/* Input field for Grade */}
                <label htmlFor="grade" style={styles.label}>Grade</label>
                <input
                    type="text"
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Enter grade (e.g., A, B+, C)"
                    required
                />

                {/* Input field for Student ID */}
                <label htmlFor="stud_id" style={styles.label}>Student ID</label>
                <input
                    type="number"
                    id="stud_id"
                    name="stud_id"
                    value={formData.stud_id}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Enter Student ID"
                    required
                />

                {/* Input field for Program */}
                <label htmlFor="program" style={styles.label}>Program</label>
                <input
                    type="text"
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Enter Program Name"
                    required
                />

                {/* Submit button */}
                <button type="submit" style={styles.button}>
                    Issue Certificate
                </button>
            </form>
        </div>
        </>
    );
    
};

// Define some basic styles for the form
const styles = {
    container: {
        maxWidth: '500px',
        margin: '50px auto',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
        color: '#555',
    },
    input: {
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '4px',
        fontSize: '16px',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#2565AE',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
    }
};

export default Issuecerti;
