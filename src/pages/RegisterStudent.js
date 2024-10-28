import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

const RegisterStudent = () => {
   const { id } = useParams();
   const { students, addStudent, updateStudent } = useContext(StudentContext);
   const [formData, setFormData] = useState({ name: '', email: '', class: '', age: '', address: '', phone: '' });

   useEffect(() => {
      if (id) {
         const student = students.find((student) => student.id === parseInt(id));
         if (student) setFormData(student);
      }
   }, [id, students]);

   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

   const handleSubmit = (e) => {
      e.preventDefault();
      if (id) {
         // Edit existing student
         updateStudent({ ...formData, id: parseInt(id) });
      } else {
         // Add new student
         addStudent({ id: Date.now(), ...formData });
      }
      setFormData({ name: '', email: '', class: '', age: '', address: '', phone: '' });
   };

   return (
      <div>
         <h2>{id ? "Edit Student" : "Register New Student"}</h2>
         <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input name="class" placeholder="Class" value={formData.class} onChange={handleChange} required />
            <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
            <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            <button type="submit">{id ? "Update" : "Register"}</button>
         </form>
      </div>
   );
};

export default RegisterStudent;