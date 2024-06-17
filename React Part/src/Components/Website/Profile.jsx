import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../Website/profile.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Profile() {
  const location = useLocation();

  // Move showMatchedProfiles to the component's scope
  const profile = location.state;

  return (
    <section id="title" className="gradient-background">
    <div className="container mt-5">
      <h1 className="mb-4">Profile</h1>
      {profile && (
        <div>
          <div className="card mb-4 ">
            <div className="card-body card-back" >
              <h5 className="card-title text-center">User Information</h5>
              <p className="card-text">
                <strong>User Name:</strong> {profile.CustomerName}
              </p>
              <p className="card-text">
                <strong>Phone No:</strong> {profile.PhoneNo}
              </p>
              <p className="card-text">
                <strong>Address:</strong> {profile.Address}
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body card-back">
              <h5 className="card-title text-center">Pet Information</h5>
              <p className="card-text">
                <strong>Pet Name:</strong> {profile.PetName}
              </p>
              <p className="card-text">
                <strong>Pet Age:</strong> {profile.Age}
              </p>
              <p className="card-text">
                <strong>Breed:</strong> {profile.Breed}
              </p>
              <p className="card-text">
                <strong>Pet Gender:</strong> {profile.PetGender}
              </p>
              <p className="card-text">
                <strong>Description:</strong> {profile.description}
              </p>
              {/* Add other pet information as needed */}
            </div>
          </div>
        </div>
      )}
      <div>
        <Link to="/" className="logout-link">
          <button className="btn btn-primary">Logout</button>
        </Link>
      </div>
    </div>
    </section>
  );
}

export default Profile;
