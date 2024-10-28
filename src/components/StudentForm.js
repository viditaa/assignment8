import React, { useState, useContext, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useParams } from 'react-router-dom';

const StudentForm = () => {
   const { students, setStudents } = useContext(StudentContext);
   const { id } = useParams();
   const isEditing = Boolean(id); // Check if we are in edit mode
   const existingStudent = students.find(student => student.id === parseInt(id));

   const [formData, setFormData] = useState(
      existingStudent || { name: '', email: '', class: '', age: '', address: '', phone: '' }
   );

   useEffect(() => {
      if (isEditing && existingStudent) {
         setFormData(existingStudent);
      }
   }, [isEditing, existingStudent]);

   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isEditing) {
         const updatedStudents = students.map(student =>
            student.id === existingStudent.id ? { ...formData, id: existingStudent.id } : student
         );
         setStudents(updatedStudents);
      } else {
         setStudents([...students, { id: Date.now(), ...formData }]);
      }
      setFormData({ name: '', email: '', class: '', age: '', address: '', phone: '' });
   };

   return (
      <form onSubmit={handleSubmit}>
         <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
         <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
         <input name="class" placeholder="Class" value={formData.class} onChange={handleChange} required />
         <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
         <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
         <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
         <button type="submit">{isEditing ? "Update" : "Register"}</button>
      </form>
   );
};

export default StudentForm;