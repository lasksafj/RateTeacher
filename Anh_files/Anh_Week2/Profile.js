import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
  return (
    <div className="container p-5 w-50">
      <h1 className="fw-bolder">Hey, Annie195</h1>
      <ul className="nav nav-tabs pt-4 pb-sm-0" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active px-5" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Profile</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link px-5" id="account-tab" data-bs-toggle="tab" data-bs-target="#account" type="button" role="tab" aria-controls="account" aria-selected="false">Account Settings</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link px-5" id="ratings-tab" data-bs-toggle="tab" data-bs-target="#ratings" type="button" role="tab" aria-controls="ratings" aria-selected="false">Ratings</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link px-5" id="prof-tab" data-bs-toggle="tab" data-bs-target="#prof" type="button" role="tab" aria-controls="prof" aria-selected="false">Saved Professor</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className="container-sm">
            <div className="row pt-5">
              <div className="col" id="firstname-label">First Name</div>
              <div className="col">Anh</div>
            </div>
            <div className="row pt-5">
              <div className="col" id="lastname-label">Last Name</div>
              <div className="col">Huynh</div>
            </div>
            <div className="row pt-5">
              <div className="col" id="school-label">School</div>
              <div className="col">University of California Davis</div>
            </div>
            <div className="row pt-5">
              <div className="col" id="year-label">Expected Year of Graduation</div>
              <div className="col">2024</div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab">
          <div className="container-sm">
            <div className="row pt-5">
              <div className="col" id="email-label">Email</div>
              <div className="col">anhhuynh@ucdavis.edu</div>
            </div>
            <div className="row pt-5">
              <div className="col" id="password-label">Password</div>
              <div className="col">********</div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="ratings" role="tabpanel" aria-labelledby="ratings-tab">
          <p className="text-center h2 pt-5"><strong>You haven’t rated any professors yet.</strong></p>
          <p className="text-center h6 text-black-100">Find your favorite professor and let them know what a difference they’ve made!</p>
        </div>
        <div className="tab-pane fade" id="prof" role="tabpanel" aria-labelledby="prof-tab">
          <p className="text-center h2 pt-5"><strong>You don’t have any saved professors yet</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
