import React from 'react';
import './styles.css';

const Profile = () => {
  let userName = localStorage.getItem('userName');
  const setUserName = (value) => localStorage.setItem('userName', value); 
  return (
    <div className="container profile-page">
      <h4>Profile</h4>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">User Name</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Your user name goes here..."
          value={userName}
          onChange={value => userName = value.target.value}
          ></input>
      </div>
      <div className="form-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setUserName(userName)}
        >
          Save
        </button>
      </div>
    </div>

  );
}

export default Profile;