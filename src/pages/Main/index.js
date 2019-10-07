import React, { Component } from 'react';
import NewTweet from "../components/NewTweet";
import Tweet from '../components/Tweet';
import './styles.css';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    }
  }

  componentDidMount() {
    this.loadTweetsFromLocalStorage();
  }

  addTweet(tweet) {
    const { tweets } = this.state;
    tweets.push(tweet);
    this.setState({ tweets }, () => this.saveTweetsToLocalStorage());
  }

  saveTweetsToLocalStorage() {
    const { tweets } = this.state;
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }

  loadTweetsFromLocalStorage() {
    let tweets;
    try {
      const localStorageTweets = localStorage.getItem('tweets');
      if (typeof localStorageTweets === 'string' && localStorageTweets.length > 0) {
        tweets = JSON.parse(localStorage.getItem('tweets'))
      }
    } catch (e) { }
    if (tweets) {
      this.setState({ tweets });
    }
  }

  render() {
    const { tweets } = this.state;
    return (
      <div className="container main-page">
        <NewTweet onPostNewTweet={tweet => this.addTweet(tweet)} />
        <div className="tweets-holder">
          {tweets
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map(tweet => {
              const { content, userName, date } = tweet;
              return <Tweet key={date} content={content} userName={userName} date={date} />
            })}
        </div>
      </div>
    );
  }
}

export default MainPage;