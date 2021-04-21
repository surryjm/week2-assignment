import './App.css';
import ForYou from './blog/ForYou/ForYou';
import InCaseYouMissedIt from './blog/MissedArticles/InCaseYouMissedIt';

function App() {
  return (
  <div className="container">
    <ForYou />
    <InCaseYouMissedIt />
  </div>
  );
}

export default App;
