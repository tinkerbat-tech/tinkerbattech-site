import "./App.css";
import QuoteBanner from "./QuoteBanner";
import WelcomeMessage from "./WelcomeMessage";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="app-container">
        <QuoteBanner />
        <Navbar />
        <div className="title-section">
          <h1 className="subtitle">
            <WelcomeMessage />
          </h1>
          <img src="/steambat.svg" alt="Steambat logo" className="logo" />
        </div>

        <section className="app-card" id="expense-graveyard">
          <div className="stars"></div>
          <div className="stars stars-2"></div>
          <div className="stars stars-3"></div>

          <div className="app-card-content">
            {/* Left Column - Info */}
            <div className="app-info">
              <h3 className="app-title">Adventure Graveyard</h3>
              <p className="tagline">Your travel buddy.</p>
              <p className="app-description">
                Split bills, track group expenses, and settle debts with your
                fellow travelers. No more awkward money conversations — let the
                graveyard handle the math.
              </p>

              <div className="store-buttons">
                <button className="store-button" disabled>
                  <span className="store-icon">🍎</span>
                  <div className="store-text">
                    <span className="store-label">App Store</span>
                    <span className="store-status">Coming Soon</span>
                  </div>
                </button>
                <button className="store-button" disabled>
                  <span className="store-icon">▶</span>
                  <div className="store-text">
                    <span className="store-label">Google Play</span>
                    <span className="store-status">Coming Soon</span>
                  </div>
                </button>
              </div>

              <span className="coming-soon-tag">Coming Soon</span>
            </div>

            {/* Right Column - Screenshots */}
            <div className="app-screenshots">
              <div className="screenshot-stack">
                <img
                  src="/screenshot-1.png"
                  alt="App screenshot 1"
                  className="screenshot"
                />
                <img
                  src="/screenshot-2.png"
                  alt="App screenshot 2"
                  className="screenshot"
                />
                <img
                  src="/screenshot-3.png"
                  alt="App screenshot 3"
                  className="screenshot"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <img src="/steambat.svg" alt="TinkerBat" className="footer-logo" />
            <nav className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Use</a>
              <a href="#contact">Contact</a>
            </nav>
            <p className="copyright">
              © 2025 TinkerBat Tech LLC. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
