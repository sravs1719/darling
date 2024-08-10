import React from 'react';
import './HospitalRegistration.css';
import dnaImage from '../assets/dna.jpg'; // Path from `components` to `assets`


function HospitalRegistration() {
    return (
        <div className="container">
            <h2>Hospital Registration</h2>
            <form>
                <div className="form-grid">
                    <div className="input-group">
                        <label htmlFor="Name">Hospital Name</label>
                        <input type="text" id="Name" placeholder="Enter the Hospital Name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Address">Address</label>
                        <input type="text" id="Address" placeholder="Enter the Address" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="ContactNumber">Contact Number</label>
                        <input type="text" id="ContactNumber" placeholder="Enter the Contact Number" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" id="Email" placeholder="Enter the Email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Website">Website</label>
                        <input type="url" id="Website" placeholder="Enter the Website URL" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Type">Hospital Type</label>
                        <input type="text" id="Type" placeholder="Enter the Hospital Type" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="RegistrationNumber">Registration Number</label>
                        <input type="text" id="RegistrationNumber" placeholder="Enter the Registration Number" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="AccreditationStatus">Accreditation Status</label>
                        <input type="text" id="AccreditationStatus" placeholder="Enter the Accreditation Status" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="BedCount">Bed Count</label>
                        <input type="number" id="BedCount" placeholder="Enter the Bed Count" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Specialties">Specialties</label>
                        <input type="text" id="Specialties" placeholder="Enter the Specialties" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="ServicesOffered">Services Offered</label>
                        <input type="text" id="ServicesOffered" placeholder="Enter the Services Offered" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="BillingPolicy">Billing Policy</label>
                        <input type="text" id="BillingPolicy" placeholder="Enter the Billing Policy" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" placeholder="Enter the Password" required />
                    </div>
                </div>
                <button type="submit" className="submit-btn">Register</button>
            </form>
        </div>
    );
}

export default HospitalRegistration;
