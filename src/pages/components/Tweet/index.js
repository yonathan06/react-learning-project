import React from "react";
import PropTypes from 'prop-types';
import './styles.css'

const Tweet = (props) => {
  const { content, userName, date } = props;
  return (
    <div className="tweet card text-white bg-dark">
      <div className="card-body">
        <div className="tweet-details card-subtitle mb-2 text-muted">
          <div className="tweet-user">{userName}</div>
          <div className="tweet-date">{date}</div>
        </div>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  content: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Tweet;