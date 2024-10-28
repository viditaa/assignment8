import React, { useContext, useEffect, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const { students, setStudents } = useContext(StudentContext);
    const [filteredStudents, setFilteredStudents] = useState(students);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('path/to/your/student-data.json'); 
            const data = await response.json();
            setStudents(data);
            setFilteredStudents(data);
        };
        fetchData();
    }, [setStudents]);


    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            const updatedStudents = filteredStudents.filter(student => student.id !== id);
            setFilteredStudents(updatedStudents);
            setStudents(updatedStudents); 
        }
    };

   
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = students.filter(student => student.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredStudents(filtered);
    };

   
    const handleClassFilter = (e) => {
        const classValue = e.target.value;
        setSelectedClass(classValue);

        if (classValue) {
            const filtered = students.filter(student => student.class === classValue);
            setFilteredStudents(filtered);
        } else {
            setFilteredStudents(students);
        }
    };

    return (
        <div>
            <h2>Student List</h2>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
            />
            <select value={selectedClass} onChange={handleClassFilter}>
                <option value="">All Classes</option>
                <option value="10th Grade">10th Grade</option>
                <option value="11th Grade">11th Grade</option>
                <option value="12th Grade">12th Grade</option>
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.class}</td>
                            <td>
                                <Link to={`/students/${student.id}`}>View</Link> | 
                                <Link to={`/register/${student.id}`}>Edit</Link> | 
                                <button onClick={() => handleDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;