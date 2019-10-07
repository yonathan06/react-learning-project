import React, { Component } from 'react';
import PropTypes from "prop-types";
import './styles.css';

class NewTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: '',
    }
  }

  handleInputChange(event) {
    const { target } = event;
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  isTweetValid() {
    return this.state.tweet.length <= 140;
  }

  postNewTweet() {
    const { onPostNewTweet } = this.props;
    const { tweet } = this.state;
    if (this.isTweetValid()) {
      onPostNewTweet({ content: tweet, userName: 'yonatan', date: new Date().toISOString() });
      this.setState({ tweet: '' });
    }
  }

  render() {
    const { tweet } = this.state;
    const isTweetValid = this.isTweetValid()
    return (
      <div className="new-tweet-form">
        <div className="new-tweet-form-input">
          <textarea
            value={tweet}
            name="tweet"
            placeholder="What you have in mind?"
            onChange={event => this.handleInputChange(event)}
          />
        </div>
        <div className="new-tweet-form-actions">
          {!isTweetValid &&
            <div className="new-tweet-length-error alert alert-danger">The tweet can't contain more then 140 chars.</div>
          }
          <button className="btn btn-primary" onClick={() => this.postNewTweet()} disabled={!isTweetValid}>Tweet</button>
        </div>
      </div>
    );
  }
}

NewTweet.propTypes = {
  onPostNewTweet: PropTypes.func.isRequired,
}

export default NewTweet;