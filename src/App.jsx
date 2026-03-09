import { useState } from "react";
import "./colors.css";
import "./App.css";

// ============================================================
// COMPONENTS
// ============================================================

function FlickerText({ children, className }) {
  return <span className={`flicker ${className || ""}`}>{children}</span>;
}

function LabFumes() {
  return (
    <div className="lab-fumes">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="fume-particle"
          style={{
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

function FlyingBat({ delay, startSide }) {
  return (
    <div
      className={`flying-bat ${startSide}`}
      style={{ animationDelay: `${delay}s` }}
    >
      🦇
    </div>
  );
}

function Navbar({ currentPage, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <button className="nav-logo" onClick={() => onNavigate("home")}>
          <img src="/steambat.svg" alt="TinkerBat" className="nav-logo-img" />
          <span className="nav-logo-text">TinkerBat Tech</span>
        </button>
        <div className="nav-links">
          <button
            className={`nav-link ${currentPage === "home" ? "active" : ""}`}
            onClick={() => onNavigate("home")}
          >
            Lab
          </button>
          <button
            className={`nav-link ${currentPage === "privacy" ? "active" : ""}`}
            onClick={() => onNavigate("privacy")}
          >
            Privacy
          </button>
          <button
            className={`nav-link ${currentPage === "terms" ? "active" : ""}`}
            onClick={() => onNavigate("terms")}
          >
            Terms
          </button>
          <button
            className={`nav-link ${currentPage === "contact" ? "active" : ""}`}
            onClick={() => onNavigate("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// PAGES
// ============================================================

function HomePage({ onNavigate }) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <LabFumes />
        <FlyingBat delay={2} startSide="right" />
        <FlyingBat delay={5} startSide="right" />
        <FlyingBat delay={8} startSide="right" />

        <div className="hero-content">
          {/*<img src="/steambat.svg" alt="TinkerBat Tech" className="hero-logo" />*/}
          <h1 className="hero-title">
            <FlickerText>TinkerBat Tech</FlickerText>
          </h1>
          <p className="hero-tagline">
            Forged in darkness. Dreamt in moonlight.
          </p>
          <p className="hero-subtitle">
            Spooky apps for everyday use — built with privacy, chaos, and an
            unreasonable number of bats.
          </p>
        </div>
      </section>

      {/* App Grid — 2x2 */}
      <section className="app-grid-section">
        <h2 className="section-heading">From the Laboratory</h2>
        <div className="app-grid">
          {/* BMA — Featured */}
          <div className="app-card featured" id="bma">
            <div className="app-card-badge">🩸 Featured</div>
            <div className="app-card-header">
              <span className="app-card-emoji">🌕</span>
              <h3 className="app-card-title">Blood Moon Almanac</h3>
            </div>
            <p className="app-card-tagline">
              Your cycle. Your data. Your device. Period.
            </p>
            <p className="app-card-description">
              A privacy-first period tracker. Encrypted on-device, no accounts,
              no cloud. Cycle tracking, cycle predictions, and symptom tracking.
            </p>
            <div className="app-card-features">
              <span>🔐 Encrypted</span>
              <span>☁️ No Cloud</span>
              <span>🩸 Cycle Tracking</span>
              <span>😣 Symptom Tracking</span>
              <span>📊 Predictions</span>
            </div>
            <div className="app-card-screenshots">
              <div className="app-card-placeholder">
                <span>🌕</span>
                <span>Screenshots soon</span>
              </div>
            </div>
            <div className="app-card-store">
              <button className="store-button-sm" disabled>
                🍎 App Store — Coming Soon
              </button>
              <button className="store-button-sm" disabled>
                ▶ Google Play — Coming Soon
              </button>
            </div>
            <div className="app-card-legal">
              <button
                className="app-legal-link"
                onClick={() => onNavigate("privacy")}
              >
                Privacy Policy
              </button>
              <span className="legal-dot">·</span>
              <button
                className="app-legal-link"
                onClick={() => onNavigate("terms")}
              >
                Terms of Use
              </button>
            </div>
          </div>

          {/* Adventure Graveyard */}
          <div className="app-card" id="adventure-graveyard">
            <div className="app-card-badge ag">⚰️ In Development</div>
            <div className="app-card-header">
              <span className="app-card-emoji">💀</span>
              <h3 className="app-card-title ag">Adventure Graveyard</h3>
            </div>
            <p className="app-card-tagline">Your travel buddy from beyond.</p>
            <p className="app-card-description">
              Split bills, track group expenses, and settle debts with fellow
              travelers. Steampunk-themed with split-flap animations and
              countdown timers.
            </p>
            <div className="app-card-features">
              <span>💰 Expense Splitting</span>
              <span>👻 Steampunk UI</span>
              <span>📋 Trip Management</span>
            </div>
            <div className="app-card-screenshots">
              <div className="app-card-screenshot-row">
                <img
                  src="/screenshot-1.png"
                  alt="Adventure Graveyard"
                  className="app-card-img"
                />
                <img
                  src="/screenshot-2.png"
                  alt="Adventure Graveyard"
                  className="app-card-img main"
                />
                <img
                  src="/screenshot-3.png"
                  alt="Adventure Graveyard"
                  className="app-card-img"
                />
              </div>
            </div>
            <div className="app-card-store">
              <button className="store-button-sm" disabled>
                🍎 App Store — Coming Soon
              </button>
              <button className="store-button-sm" disabled>
                ▶ Google Play — Coming Soon
              </button>
            </div>
          </div>

          {/* Placeholder 1 */}
          <div className="app-card placeholder-card">
            <div className="app-card-header">
              <span className="app-card-emoji">⚙️</span>
              <h3 className="app-card-title placeholder-title">???</h3>
            </div>
            <p className="app-card-tagline">
              Something wicked this way comes...
            </p>
            <p className="app-card-description">
              A new experiment is brewing in the laboratory. The bats are
              restless. Stay tuned.
            </p>
            <div className="app-card-coming">
              <span className="coming-pulse">🧪</span>
              In the Lab
            </div>
          </div>

          {/* Placeholder 2 */}
          <div className="app-card placeholder-card">
            <div className="app-card-header">
              <span className="app-card-emoji">⚙️</span>
              <h3 className="app-card-title placeholder-title">???</h3>
            </div>
            <p className="app-card-tagline">The wolves are whispering...</p>
            <p className="app-card-description">
              Another creation stirs in the darkness. Copper gears are turning.
              Details classified.
            </p>
            <div className="app-card-coming">
              <span className="coming-pulse">🔮</span>
              In the Lab
            </div>
          </div>
        </div>
      </section>

      {/* The Scientist */}
      <section className="scientist">
        <div className="scientist-content">
          <span className="scientist-emoji">🔬</span>
          <h3 className="scientist-title">The Scientist</h3>
          <p className="scientist-text">
            Built by a creature who trades in both vital signs and voltage — a
            healthcare professional turned rogue developer who believes your
            body's data belongs to exactly one person: you.
          </p>
          <p className="scientist-text">
            Operating from the shadows. Fueled by an unreasonable number of
            energy drinks and an unshakeable conviction that steampunk gears
            make everything better.
          </p>
          <p className="scientist-sign-off">
            <em>The bats send their regards.</em> 🦇
          </p>
        </div>
      </section>
    </>
  );
}

function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="legal-content">
        <h1 className="legal-title">🔒 Privacy Policy</h1>
        <p className="legal-updated">Last updated: March 2026</p>

        <div className="legal-section">
          <h2>Your Data, Your Device</h2>
          <p>
            TinkerBat Tech LLC ("we", "us", "our") builds apps that respect your
            privacy. This Privacy Policy explains how each of our apps handles
            your data.
          </p>
        </div>

        {/* BMA Privacy */}
        <div className="legal-app-block">
          <h2 className="legal-app-heading">🩸 Blood Moon Almanac</h2>

          <div className="legal-section">
            <h3>Data Storage</h3>
            <p>
              Blood Moon Almanac stores all data locally on your device. We do
              not collect, transmit, or store any personal data on external
              servers.
            </p>
            <p>
              <strong>Data stored on your device includes:</strong> cycle
              tracking data, symptom logs, medication records, and app
              preferences. All health data is encrypted at rest on your device.
              Encryption keys are stored securely in your device's protected
              hardware.
            </p>
          </div>

          <div className="legal-section">
            <h3>Data We Do NOT Collect</h3>
            <p>
              We do not collect your name, email address, phone number, location
              data, device identifiers, analytics, crash reports, or any form of
              telemetry. Zero. None. Zilch.
            </p>
          </div>

          <div className="legal-section">
            <h3>Third-Party SDKs</h3>
            <p>
              Blood Moon Almanac does not include any advertising SDKs,
              analytics SDKs, or social media SDKs. No data is shared with third
              parties because no data leaves your device.
            </p>
          </div>

          <div className="legal-section">
            <h3>Data Export</h3>
            <p>
              You may export your data as a PDF report at any time through the
              app's export feature. This export is generated locally on your
              device and is not transmitted to any server.
            </p>
          </div>

          <div className="legal-section">
            <h3>Data Deletion</h3>
            <p>
              You can delete all app data at any time through the Settings
              screen. Uninstalling the app also removes all stored data
              permanently.
            </p>
          </div>
        </div>

        {/* Adventure Graveyard Privacy */}
        <div className="legal-app-block">
          <h2 className="legal-app-heading">
            ⚰️ Adventure Graveyard - COMING SOON
          </h2>

          <div className="legal-section">
            {/* <h3>Data Storage</h3>
            <p>
              Adventure Graveyard stores all trip data, expenses, and
              preferences locally on your device. No accounts are required and
              no data is transmitted to external servers.
            </p>
          </div>

          <div className="legal-section">
            <h3>Data We Do NOT Collect</h3>
            <p>
              We do not collect personal information, location data, device
              identifiers, or any analytics from Adventure Graveyard.
            </p>
          </div>

          <div className="legal-section">
            <h3>Third-Party SDKs</h3>
            <p>
              Adventure Graveyard does not include advertising, analytics, or
              social media SDKs.
            </p>*/}
          </div>
        </div>

        {/* General */}
        <div className="legal-app-block">
          <h2 className="legal-app-heading">📋 General Policies</h2>

          <div className="legal-section">
            <h3>Children's Privacy</h3>
            <p>
              Our apps are not directed at children under 13. We do not
              knowingly collect data from children.
            </p>
          </div>

          <div className="legal-section">
            <h3>Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be reflected on this page with an updated date.
            </p>
          </div>

          <div className="legal-section">
            <h3>Contact</h3>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a href="mailto:support@tinkerbattech.com">
                support@tinkerbattech.com
              </a>
            </p>
          </div>
        </div>

        <div className="legal-footer">
          <p>© {new Date().getFullYear()} TinkerBat Tech LLC.</p>
        </div>
      </div>
    </section>
  );
}

function TermsPage() {
  return (
    <section className="legal-page">
      <div className="legal-content">
        <h1 className="legal-title">📜 Terms of Use</h1>
        <p className="legal-updated">Last updated: March 2026</p>

        <div className="legal-section">
          <h2>Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using any application developed by
            TinkerBat Tech LLC ("we", "us", "our"), you agree to be bound by
            these Terms of Use.
          </p>
        </div>

        <div className="legal-section">
          <h2>License</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to use our applications for personal, non-commercial
            purposes in accordance with these terms.
          </p>
        </div>

        <div className="legal-section">
          <h2>Medical Disclaimer</h2>
          <p>
            Blood Moon Almanac is a tracking tool and is NOT a medical device.
            It does not provide medical advice, diagnoses, or treatment
            recommendations. Cycle predictions are estimates based on historical
            data and should not be used as a sole method of contraception or
            fertility planning. Always consult a qualified healthcare provider
            for medical decisions.
          </p>
        </div>

        <div className="legal-section">
          <h2>Data Responsibility</h2>
          <p>
            Because all data is stored locally on your device, you are
            responsible for maintaining backups and securing your device.
            TinkerBat Tech LLC is not responsible for data loss due to device
            failure, theft, or accidental deletion.
          </p>
        </div>

        <div className="legal-section">
          <h2>Intellectual Property</h2>
          <p>
            All content, designs, and branding associated with TinkerBat Tech
            applications are the property of TinkerBat Tech LLC.
          </p>
        </div>

        <div className="legal-section">
          <h2>Limitation of Liability</h2>
          <p>
            Our applications are provided "AS IS" without warranty of any kind.
            TinkerBat Tech LLC shall not be liable for any damages arising from
            the use or inability to use our applications.
          </p>
        </div>

        <div className="legal-section">
          <h2>Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of our applications constitutes acceptance of modified terms.
          </p>
        </div>

        <div className="legal-section">
          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact us at{" "}
            <a href="mailto:support@tinkerbattech.com">
              support@tinkerbattech.com
            </a>
          </p>
        </div>

        <div className="legal-footer">
          <p>© {new Date().getFullYear()} TinkerBat Tech LLC.</p>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-content">
        <span className="contact-emoji">📡</span>
        <h1 className="contact-title">Transmit a Signal</h1>
        <p className="contact-subtitle">
          Got a question, bug report, or just want to talk about bats?
        </p>

        <div className="contact-cards">
          <a href="mailto:support@tinkerbattech.com" className="contact-card">
            <span className="contact-card-icon">📧</span>
            <span className="contact-card-label">Email</span>
            <span className="contact-card-value">
              support@tinkerbattech.com
            </span>
          </a>

          <div className="contact-card">
            <span className="contact-card-icon">🏠</span>
            <span className="contact-card-label">Headquarters</span>
            <span className="contact-card-value">Somewhere in Time</span>
          </div>

          <div className="contact-card">
            <span className="contact-card-icon">🦇</span>
            <span className="contact-card-label">Bat Count</span>
            <span className="contact-card-value">Immeasurable</span>
          </div>
        </div>

        <div className="contact-footer-note">
          <p>
            <em>
              Response times may vary depending on the phase of the moon and
              local bat migration patterns.
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <img src="/steambat.svg" alt="TinkerBat" className="footer-logo" />
        <nav className="footer-links">
          <button onClick={() => onNavigate("privacy")}>Privacy Policy</button>
          <button onClick={() => onNavigate("terms")}>Terms of Use</button>
          <button onClick={() => onNavigate("contact")}>Contact</button>
        </nav>
        <p className="copyright">
          © {new Date().getFullYear()} TinkerBat Tech LLC. All rights reserved.
        </p>
        <p className="footer-tagline">
          Built with imagination, copper wire, and too much caffeine. 🦇
        </p>
      </div>
    </footer>
  );
}

// ============================================================
// APP
// ============================================================

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      {currentPage === "home" && <HomePage onNavigate={navigate} />}
      {currentPage === "privacy" && <PrivacyPage />}
      {currentPage === "terms" && <TermsPage />}
      {currentPage === "contact" && <ContactPage />}

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
