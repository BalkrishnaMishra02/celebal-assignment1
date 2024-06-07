import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const { formData } = location.state;

    return (
        <div>
            <h2>Details</h2>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Username: {formData.username}</p>
            <p>E-mail: {formData.email}</p>
            <p>Phone No.: {formData.phoneNo}</p>
            <p>Country: {formData.country}</p>
            <p>City: {formData.city}</p>
            <p>Pan No.: {formData.panNo}</p>
            <p>Aadhar No.: {formData.aadharNo}</p>
        </div>
    );
};

export default Details;
