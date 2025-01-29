import React, { useState } from "react";
import "../css/QuickPage.css";

const QuickHelpModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        service: "",
        city: "",
        address: "",
        remark: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                {/* Left Side Image */}
                <div className="modal-image">
                    <img
                        src="https://onepointservices.co.in/assets/images/instent-book.webp"
                        alt="Worker"
                    />
                </div>

                {/* Right Side Form */}
                <div className="modal-content">
                    <h2 className="modal-title">Book Instant Service</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="input-field" />
                        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter Phone Number" className="input-field" />
                        <select name="service" value={formData.service} onChange={handleChange} className="input-field">
                            <option value="">-- Select Service --</option>
                        </select>
                        <select name="city" value={formData.city} onChange={handleChange} className="input-field">
                            <option value="">-- Select City --</option>
                        </select>
                        <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter Your Address" className="input-field"></textarea>
                        <textarea name="remark" value={formData.remark} onChange={handleChange} placeholder="Enter Your Remark" className="input-field"></textarea>

                        {/* Buttons */}
                        <div className="modal-buttons">
                            <button type="submit" className="book-btn">Book Service Now</button>
                            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuickHelpModal;
