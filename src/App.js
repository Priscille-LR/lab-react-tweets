import Tweet from "./components/Tweet"
import tweetsArray from './data/tweets'
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

function App() {
  return (
    <div className="App">
      {tweetsArray.map(tweet => <Tweet key={uuidv4()} tweet={tweet}/>)}
    </div>
  );
}

export default App;
