import React from 'react';
import './styles.css';
import { AppContext } from "../../context";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameInput: '',
    }
  }
  render() {
    const { userNameInput } = this.state;
    return (
      <AppContext.Consumer>
        {({ userName, setUserName }) => (
          <div className="container profile-page">
            <h4>Profile</h4>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">User Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Your user name goes here..."
                value={userNameInput || userName}
                onChange={event => this.setState({ userNameInput: event.target.value })}
                ></input>
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setUserName(userNameInput)}
                >
                Save
              </button>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Profile;