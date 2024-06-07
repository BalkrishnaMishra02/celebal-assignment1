import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        showPassword: false,
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const countries = {
        India: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'],
        USA: ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    };

    const validate = (data) => {
        let errors = {};
        if (!data.firstName) errors.firstName = 'First Name is required';
        if (!data.lastName) errors.lastName = 'Last Name is required';
        if (!data.username) errors.username = 'Username is required';
        if (!data.email) errors.email = 'E-mail is required';
        if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'E-mail is invalid';
        if (!data.password) errors.password = 'Password is required';
        if (!data.phoneNo) errors.phoneNo = 'Phone number is required';
        if (!data.country) errors.country = 'Country is required';
        if (!data.city) errors.city = 'City is required';
        if (!data.panNo) errors.panNo = 'Pan No. is required';
        if (!data.aadharNo) errors.aadharNo = 'Aadhar No. is required';
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePasswordToggle = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formData);
        setErrors(errors);
        setIsSubmitted(true);
        if (Object.keys(errors).length === 0) {
            navigate('/details', { state: { formData } });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                />
                {isSubmitted && errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                />
                {isSubmitted && errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={errors.username ? 'error' : ''}
                />
                {isSubmitted && errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div>
                <label>E-mail:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                />
                {isSubmitted && errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type={formData.showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                />
                <button type="button" onClick={handlePasswordToggle} style={{ marginTop: '10px' }}>
                    {formData.showPassword ? 'Hide' : 'Show'}
                </button>
                {isSubmitted && errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div>
                <label>Phone No.:</label>
                <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    className={errors.phoneNo ? 'error' : ''}
                />
                {isSubmitted && errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
            </div>
            <div>
                <label>Country:</label>
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={errors.country ? 'error' : ''}
                >
                    <option value="">Select Country</option>
                    {Object.keys(countries).map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
                {isSubmitted && errors.country && <span className="error">{errors.country}</span>}
            </div>
            <div>
                <label>City:</label>
                <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={errors.city ? 'error' : ''}
                >
                    <option value="">Select City</option>
                    {formData.country &&
                        countries[formData.country].map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                </select>
                {isSubmitted && errors.city && <span className="error">{errors.city}</span>}
            </div>
            <div>
                <label>Pan No.:</label>
                <input
                    type="text"
                    name="panNo"
                    value={formData.panNo}
                    onChange={handleChange}
                    className={errors.panNo ? 'error' : ''}
                />
                {isSubmitted && errors.panNo && <span className="error">{errors.panNo}</span>}
            </div>
            <div>
                <label>Aadhar No.:</label>
                <input
                    type="text"
                    name="aadharNo"
                    value={formData.aadharNo}
                    onChange={handleChange}
                    className={errors.aadharNo ? 'error' : ''}
                />
                {isSubmitted && errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
            </div>
            <button type="submit" disabled={Object.keys(errors).length > 0}>
                Submit
            </button>
        </form>
    );
};

export default Form;

