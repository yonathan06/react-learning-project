import React, { Component } from 'react';
import NewTweet from "../components/NewTweet";
import Tweet from '../components/Tweet';
import * as Api from '../../services/api';
import './styles.css';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false,
    }
  }

  componentDidMount() {
    // this.loadTweetsFromLocalStorage();
    this.loadTweetsFromServer();
  }

  addTweet(tweet) {
    const { tweets } = this.state;
    tweets.push(tweet);
    this.setState({ tweets }
      // , () => this.saveTweetsToLocalStorage()
    );
  }

  async loadTweetsFromServer() {
    this.setState({ loading: true });
    try {
      const response = await Api.fetchTweets();
      const { tweets } = response.data;
      this.setState({ tweets });
    } catch (e) {
      alert(`server error ${e.message}`);
    } finally {
      this.setState({ loading: false });
    }
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
    const { tweets, loading } = this.state;
    return (
      <div className="container main-page">
        <NewTweet onPostNewTweet={tweet => this.addTweet(tweet)} />
        {loading && (
          <div>
            Loading...
          </div>
        )}
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