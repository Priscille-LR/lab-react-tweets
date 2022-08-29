import Tweet from "./components/Tweet";
import tweetsArray from './data/tweets'
import "./App.css";

function App() {
  return (
    <div className="App">
      {tweetsArray.map(tweet => <Tweet key={tweet.message} tweet={tweet}/>)}
    </div>
  );
}

export default App;
