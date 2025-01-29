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
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add API call or form submission logic here
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-image">
                    <img
                        src="https://onepointservices.co.in/assets/images/instent-book.webp"
                        alt="Worker"
                    />
                </div>

                <div className="modal-content">
                    <h2 className="modal-title">Book Instant Service</h2>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="fullName" 
                            value={formData.fullName} 
                            onChange={handleChange} 
                            placeholder="Full Name" 
                            className="input-field" 
                            required
                        />
                        <input 
                            type="tel" 
                            name="phoneNumber" 
                            value={formData.phoneNumber} 
                            onChange={handleChange} 
                            placeholder="Enter Phone Number" 
                            className="input-field" 
                            required
                        />
                        <select 
                            className="form-select" 
                            name="service" 
                            value={formData.service} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="">-- Select Service --</option>
                            {["AC Repair Service", "RO Repair Service", "Refrigerator Repair Service", "Washing Machine Repair Service", "Microwave Repair Service", "Geyser Repair Service", "Electric Chimney Repair Service", "LED TV Repair Service", "Electrician Service", "Air Cooler Repair Service", "Deep Freezer Repair Service", "Water Cooler Repair Service", "Water Dispenser Repair Service", "CCTV Repair Service", "Laptop Repair Service", "Desktop Repair Service", "Printer Repair Service"].map(service => (
                                <option key={service} value={service}>{service}</option>
                            ))}
                        </select>
                        <select 
                            className="form-select" 
                            name="city" 
                            value={formData.city} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="">-- Select City --</option>
                            {["Agra", "Aligarh", "Bareilly", "Bhopal", "Dehradun", "Ghaziabad", "Gorakhpur", "Greater Noida", "Indore", "Jaipur", "Kanpur", "Lucknow", "Meerut", "Moradabad", "Noida", "Patna", "Pune", "Sitapur", "Varanasi"].map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                        <textarea 
                            name="address" 
                            value={formData.address} 
                            onChange={handleChange} 
                            placeholder="Enter Your Address" 
                            className="input-field" 
                            required
                        ></textarea>
                        <textarea 
                            name="remark" 
                            value={formData.remark} 
                            onChange={handleChange} 
                            placeholder="Enter Your Remark" 
                            className="input-field"
                        ></textarea>

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
