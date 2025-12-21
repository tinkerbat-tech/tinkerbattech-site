import "./App.css";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  return (
    <>
      <div className="title-section">
        <h1 className="title">Tinkerbat Tech</h1>
        <h2 className="subtitle">
          <WelcomeMessage />
        </h2>
        <img src="/steambat.svg" alt="Steambat logo" className="logo" />
      </div>
      <div className="landing">
        <h3 className="app-title">Expense Graveyard</h3>
        <p className="tagline">Your travel buddy.</p>
        <button className="cta-button">Coming Soon</button>
      </div>
    </>
  );
}

export default App;
