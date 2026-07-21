import { useState } from "react";
import "./colors.css";
import "./App.css";
import "./WelcomeMessage.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";

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

function Navbar({ currentPage, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <button className="nav-logo" onClick={() => onNavigate("home")}>
          <img
            src="/artemis_tinkerbat-cropped.png"
            alt="TinkerBat"
            className="nav-logo-img"
          />
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
            className={`nav-link ${currentPage === "support" ? "active" : ""}`}
            onClick={() => onNavigate("support")}
          >
            Support
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
        <img
          src="/artemis_tinkerbat-cropped.png"
          alt=""
          className="hero-logo"
        />
        <LabFumes />

        <div className="hero-content">
          <div className="hero-text-top">
            <h1 className="hero-title">
              <FlickerText>TinkerBat Tech</FlickerText>
            </h1>
          </div>
          <div className="hero-text-bottom">
            <p className="hero-tagline">
              Dreamt in moonlight. Forged in darkness.
            </p>
            <p className="hero-subtitle">
              <WelcomeMessage />
            </p>
          </div>
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
              A privacy-first period journal with werewolf energy. Encrypted
              on-device, no accounts, no cloud, no data harvesting. Flow
              journaling, symptom logging, cycle predictions, and exportable PDF
              reports for your healthcare provider.
            </p>
            <div className="app-card-features">
              <span>🔐 Encrypted</span>
              <span>☁️ No Cloud</span>
              <span>🩸 Flow Journaling</span>
              <span>😣 Symptom Logging</span>
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
                <div className="app-card-placeholder">
                  <span>🪦</span>
                  <span>Screenshots soon</span>
                </div>
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
    </>
  );
}
function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="legal-content">
        <h1 className="legal-title">🔒 Privacy Policy</h1>
        <p className="legal-updated">Last updated: April 23, 2026</p>

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
              servers because there are no servers.
            </p>
            <p>
              <strong>Data stored on your device includes:</strong> cycle data,
              symptom records, medication entries, and app preferences. All
              health data is encrypted on your device.
            </p>
          </div>

          <div className="legal-section">
            <h3>Data We Do NOT Collect</h3>
            <p>
              We do not collect your name, email address, phone number, birth
              date, age, biometric data, location data, device identifiers,
              analytics, crash reports, or any form of telemetry. Zero. None.
              Zilch.
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
              device and is not transmitted to any server. Note that PDF exports
              are unencrypted once created and protecting them after export is
              your responsibility.
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

          <div className="legal-section">
            <h3>📸 Screen Capture Protection</h3>
            <p>
              Blood Moon Almanac blocks screen recording on sensitive screens
              including medications, cycle data, and symptoms. This feature is
              ON by default to protect your privacy automatically.
            </p>
            <p>
              On Android, screenshots on protected screens are blocked. On iOS,
              the operating system does not allow apps to reliably prevent still
              screenshots — protected screens may capture as a blank image, but
              this behavior is controlled by the operating system and is not
              guaranteed. Blood Moon Almanac therefore also detects when a
              screenshot is taken and warns you that the image may exist outside
              the app's protection.
            </p>
            <p>
              The app also obscures its contents in the app switcher, so cycle
              and symptom data isn't visible in the multitasking preview.
            </p>
            <p>
              All of this runs locally on your device and does not transmit any
              data. You can disable screen capture protection in Settings, but
              doing so requires PIN entry to confirm the change.
            </p>
          </div>

          <div className="legal-section">
            <h3>☁️ Why Screenshots Matter</h3>
            <p>
              A screenshot of cycle, symptom, or medication data becomes a photo
              in your device's photo library. Once it exists outside the app's
              encrypted storage, that photo can travel to places where the app's
              privacy protections no longer apply. Common pathways include:
            </p>
            <ul>
              • Cloud photo sync services: Many photo apps automatically upload
              images from your device to cloud servers, where they may be stored
              indefinitely and accessed by the service provider.
            </ul>
            <ul>
              • Device backup services: Automated backup tools that protect your
              phone's data may include the entire photo library, meaning
              sensitive screenshots could be backed up alongside your contacts
              and other data.
            </ul>
            <ul>
              • Photo content recognition: Modern phones include features that
              scan photos to identify objects, recognize text, and search by
              content. Once a screenshot enters your photo library, these
              features may process it.
            </ul>
            <ul>
              • Third-party apps: Any app you've granted photo library access to
              can read your entire photo collection, including screenshots of
              sensitive health data.
            </ul>
            <ul>
              • Shared albums and direct sharing: Photos can be inadvertently
              shared through automatic shared album syncing, accidental
              device-to-device transfers, or multi-select sharing actions.
            </ul>
            <ul>
              • Phone repair and resale: Photos that haven't been deleted may
              persist when a phone is repaired, resold, or recovered.
            </ul>
            <p>
              On Android, screenshot blocking prevents these pathways entirely,
              because the screenshot is never created. On iOS, where the
              operating system does not permit apps to reliably block
              screenshots, Blood Moon Almanac instead warns you the moment one
              is taken, so you can decide whether to keep or delete it.
            </p>
            <p>
              Data that stays inside the app remains in encrypted local storage
              on your device, protected by your PIN, your biometric, and your
              phone's hardware security.
            </p>
            <p>
              If a screenshot of your data does exist — for instance, one you
              took to share with a healthcare provider — you are responsible for
              its security once it leaves the app. Consider deleting it after
              sharing, and review which apps have access to your photo library.
            </p>
          </div>

          <div className="legal-section">
            <h3>Biometric Authentication</h3>
            <p>
              Blood Moon Almanac offers optional biometric unlock (Face ID,
              Touch ID, or fingerprint). Biometric authentication is performed
              entirely by your device's operating system using secure hardware
              built into your phone. Blood Moon Almanac and TinkerBat Tech LLC
              do not collect, store, transmit, access, or process any biometric
              information at any time. Your fingerprint or face scan data never
              leaves your device and is never visible to the app.
            </p>
          </div>

          <div className="legal-section">
            <h3>Law Enforcement & Legal Requests</h3>
            <p>
              We understand the sensitive nature of reproductive health data.
              Because Blood Moon Almanac stores all data locally on your device
              and we operate without servers, we cannot comply with data
              requests — there is no server to subpoena, no database to search,
              no records to hand over. Your data exists only on your physical
              device, protected by your device's security.
            </p>
          </div>
        </div>

        {/* Adventure Graveyard Privacy */}
        <div className="legal-app-block">
          <h2 className="legal-app-heading">⚰️ Adventure Graveyard</h2>
          <div className="legal-section">
            <p>
              Adventure Graveyard is currently in development. Its privacy
              policy will be published before launch.
            </p>
          </div>
        </div>

        {/* General */}
        <div className="legal-app-block">
          <h2 className="legal-app-heading">📋 General Policies</h2>

          <div className="legal-section">
            <h3>Children's Privacy & Age Requirements</h3>
            <p>
              Our apps require users to be at least 13 years old, or the minimum
              age required to use digital services in their country, whichever
              is higher. Users aged 13 to 17 should have parental permission
              before using our apps.
            </p>

            <h4>COPPA Compliance</h4>
            <p>
              In accordance with the Children's Online Privacy Protection Act
              (COPPA), users who identify as under 13 are prevented from
              accessing our apps. If a parent, guardian, or other responsible
              party notifies us that a user under 13 is using one of our apps,
              we will respond promptly to coordinate the child's transition off
              the app. To report a concern, contact{" "}
              <a href="mailto:support@tinkerbattech.com">
                support@tinkerbattech.com
              </a>
              .
            </p>

            <p>
              Because our apps store all data locally on your device and operate
              without servers, no personal information is collected,
              transmitted, or stored from any user — which means there is no
              data from an under-13 user for us to retain, transfer, or delete.
            </p>
          </div>

          <div className="legal-section">
            <h3>Regulatory Compliance</h3>
            <p>
              Our local-only architecture means we are structurally unable to
              collect, share, or sell your personal information. This places us
              in compliance with major privacy frameworks:
            </p>
            <ul>
              <li>
                <strong>GDPR (European Union):</strong> We do not process
                personal data in the manner GDPR regulates because no data
                leaves your device.
              </li>
              <li>
                <strong>CCPA / CPRA (California):</strong> We do not sell,
                share, or disclose personal information to any third party.
              </li>
              <li>
                <strong>Washington My Health My Data Act:</strong> Consumer
                health data is not transmitted off-device, sold, shared, or
                subject to geofencing.
              </li>
              <li>
                <strong>COPPA (United States):</strong> See Children's Privacy
                section above.
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h3>Third-Party Services</h3>
            <p>
              Blood Moon Almanac does not integrate with any third-party
              services that receive your personal or health data. Specifically:
            </p>
            <ul>
              <li>No advertising SDKs or ad networks</li>
              <li>No analytics platforms or third-party tracking SDKs</li>
              <li>No social media SDKs or third-party social integrations</li>
              <li>No crash reporting services that send data externally</li>
              <li>No A/B testing or experimentation platforms</li>
              <li>No data brokers or data enrichment services</li>
              <li>No AI or machine learning services that process your data</li>
            </ul>
            <p>
              Note: Your device's operating system may collect its own usage
              data independently of this app. Those practices are governed by
              the operating system provider's privacy policies, not ours, and
              are outside our control.
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
            <h3>Support</h3>
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
        <p className="legal-updated">Last updated: April 23, 2026</p>

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
            This End User License Agreement ("Agreement") is between you and
            TinkerBat Tech LLC ("TinkerBat Tech," "we," "us"), and not with
            Apple, Inc. ("Apple"). TinkerBat Tech is solely responsible for
            Blood Moon Almanac and its content.
          </p>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to use Blood Moon Almanac on any Apple-branded device that
            you own or control, as permitted by the Apple Media Services Terms
            and Conditions. You may not distribute, sublicense, rent, lease, or
            lend the app. If you sell or give away your device, you must remove
            the app first.
          </p>
        </div>

        <div className="legal-section">
          <h2>Medical Disclaimer</h2>
          <p>
            Blood Moon Almanac is a journaling and education tool and is NOT a
            medical device. It does not provide medical advice, diagnoses, or
            treatment recommendations. Period and fertility predictions are
            estimates based on your recorded cycle data and have no guaranteed
            accuracy. Blood Moon Almanac is NOT a contraceptive tool and should
            not be relied upon for pregnancy planning, prevention, or as a
            method of contraception. Always consult a qualified healthcare
            provider for medical and reproductive health decisions, including
            any decisions related to fertility, contraception, or pregnancy.
          </p>
        </div>

        <div className="legal-section">
          <h2>Not Birth Control</h2>
          <p>
            Blood Moon Almanac is NOT a contraceptive method. Do NOT rely on
            this app to prevent pregnancy. Fertility journaling can help you
            understand your cycle, but it is NOT foolproof birth control. Use
            proper contraception if you wish to avoid pregnancy, and consult a
            qualified healthcare provider for contraceptive guidance.
          </p>
        </div>

        <div className="legal-section">
          <h2>Prediction Accuracy</h2>
          <p>
            Cycle predictions in Blood Moon Almanac are estimates generated from
            your recorded cycle data. Prediction accuracy varies based on the
            regularity of your cycle and the amount of historical data
            available. Cycles can shift due to stress, illness, travel,
            medications, hormonal changes, lifestyle changes, perimenopause, and
            many other factors. Predictions are journaling references, not
            medical forecasts, and should not be treated as guarantees.
          </p>
        </div>

        <div className="legal-section">
          <h2>Diabetes & Blood Sugar Journaling</h2>
          <p>
            Blood Moon Almanac allows you to journal blood glucose readings,
            daily total insulin units (with optional basal and bolus breakdown),
            and blood sugar-related symptoms alongside your menstrual cycle
            data. This feature is designed to help you identify patterns that
            may be useful to discuss with your healthcare provider.
          </p>
          <p>
            Blood Moon Almanac is NOT a medical device and is NOT intended to:
          </p>
          <ul>
            <li>
              Provide medical advice, diagnoses, or treatment recommendations
            </li>
            <li>Recommend insulin dosages, adjustments, or timing</li>
            <li>
              Replace the advice of your doctor, endocrinologist, diabetes
              educator, or other healthcare provider
            </li>
            <li>Predict or warn of hypoglycemic or hyperglycemic events</li>
            <li>
              Serve as a continuous glucose monitor (CGM), glucose meter, or
              insulin pump replacement
            </li>
          </ul>
          <p>
            Always consult your healthcare provider before making changes to
            your insulin regimen, medication, or diabetes management plan. If
            you are experiencing a diabetic emergency, contact emergency
            services or your healthcare provider immediately.
          </p>
          <p>
            All blood glucose and insulin data is stored locally on your device
            using the same encryption applied to all Blood Moon Almanac data.
            This information is never transmitted, shared, or stored externally.
          </p>
        </div>

        <div className="legal-section">
          <h2>Age Requirement</h2>
          <p>
            You must be at least 13 years old to use Blood Moon Almanac, or the
            minimum age required to use digital services in your country,
            whichever is higher. Users aged 13 to 17 should have parental
            permission before using the app. See our Privacy Policy for details
            on age verification and COPPA compliance.
          </p>
        </div>

        <div className="legal-section">
          <h2>Data Security & Access</h2>
          <p>
            Your data in Blood Moon Almanac is encrypted on your device and
            protected by your PIN and/or biometric authentication (Face ID,
            Touch ID, or fingerprint). Please understand the following before
            using the app:
          </p>
          <ul>
            <li>
              Your PIN, biometric authentication, and security question are your
              only access methods.
            </li>
            <li>
              After 5 failed PIN attempts, you will be temporarily locked out.
              Lockout duration increases with repeated failures.
            </li>
            <li>
              If you forget your PIN, you can recover access using biometric
              authentication or your security question.
            </li>
            <li>
              If all recovery options fail, you must reinstall the app.
              Reinstalling permanently deletes all data. This cannot be
              reversed.
            </li>
            <li>
              TinkerBat Tech LLC cannot recover your data under any
              circumstances — we never had it.
            </li>
          </ul>
          <p>
            This is not a limitation — it is a deliberate security design. By
            never storing your data, we ensure it can never be accessed by
            anyone other than you.
          </p>
          <p>
            Once you export your data (e.g., as a PDF), that file exists outside
            the app's encrypted storage. TinkerBat Tech LLC is not responsible
            for the security of exported files, shared documents, or data
            accessed due to device compromise, theft, or unauthorized access to
            your device.
          </p>
        </div>

        <div className="legal-section">
          <h2>Data Responsibility</h2>
          <p>
            Because all data is stored locally on your device, you are
            responsible for maintaining backups and securing your device.
            TinkerBat Tech LLC is not responsible for data loss due to device
            failure, theft, or accidental deletion. PDF exports created from the
            app are unencrypted and your responsibility to protect once shared
            or saved outside the app.
          </p>
          <p>
            Certain features of our apps, including optional device unlock, may
            make use of biometric authentication provided by your device's
            operating system. Our apps do not collect, store, access, or process
            biometric information. All biometric verification occurs entirely on
            your device.
          </p>
        </div>

        <div className="legal-section">
          <h2>Maintenance & Support</h2>
          <p>
            TinkerBat Tech LLC is solely responsible for providing maintenance
            and support services for Blood Moon Almanac. You can reach us at{" "}
            <a href="mailto:support@tinkerbattech.com">
              support@tinkerbattech.com
            </a>{" "}
            for support inquiries.
          </p>
          <p>
            Apple has no obligation whatsoever to furnish any maintenance or
            support services with respect to Blood Moon Almanac.
          </p>
        </div>

        <div className="legal-section">
          <h2>Warranty</h2>
          <p>
            Blood Moon Almanac is provided "AS IS" and "AS AVAILABLE" without
            warranty of any kind. TinkerBat Tech LLC disclaims all warranties,
            express or implied, including but not limited to implied warranties
            of merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the app will be
            uninterrupted, error-free, or free of harmful components.
          </p>
          <p>
            In the event of any failure of Blood Moon Almanac to conform to any
            applicable warranty, you may notify Apple, and Apple will refund the
            purchase price (if any) for the app. To the maximum extent permitted
            by applicable law, Apple has no other warranty obligation whatsoever
            with respect to Blood Moon Almanac. Any other claims, losses,
            liabilities, damages, costs, or expenses attributable to any failure
            to conform to any warranty are the sole responsibility of TinkerBat
            Tech LLC.
          </p>
        </div>

        <div className="legal-section">
          <h2>Product Claims & Liability</h2>
          <p>
            You acknowledge that TinkerBat Tech LLC, not Apple, is responsible
            for addressing any claims you or any third party may have relating
            to Blood Moon Almanac or your possession and use of the app,
            including but not limited to:
          </p>
          <ul>
            <li>Product liability claims</li>
            <li>
              Any claim that the app fails to conform to any applicable legal or
              regulatory requirement
            </li>
            <li>
              Claims arising under consumer protection, privacy, or similar
              legislation
            </li>
          </ul>
          <p>
            To the maximum extent permitted by applicable law, TinkerBat Tech
            LLC's total liability for any claim arising from or related to this
            Agreement or your use of the app shall not exceed the amount you
            paid for the app, if any.
          </p>
        </div>

        <div className="legal-section">
          <h2>Legal Compliance</h2>
          <p>You represent and warrant that:</p>
          <ul>
            <li>
              You are not located in a country that is subject to a U.S.
              Government embargo, or that has been designated by the U.S.
              Government as a "terrorist supporting" country
            </li>
            <li>
              You are not listed on any U.S. Government list of prohibited or
              restricted parties
            </li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>Third-Party Beneficiary</h2>
          <p>
            You acknowledge and agree that Apple and its subsidiaries are
            third-party beneficiaries of this Agreement. Upon your acceptance of
            this Agreement, Apple has the right (and will be deemed to have
            accepted the right) to enforce this Agreement against you as a
            third-party beneficiary.
          </p>
        </div>

        <div className="legal-section">
          <h2>Intellectual Property</h2>
          <p>
            All content, designs, branding, characters, and original artwork
            associated with TinkerBat Tech applications — including but not
            limited to Blood Moon Almanac, the SteamWolf and SteamBat logos, and
            all related lore — are the property of TinkerBat Tech LLC.
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
          <h2>Support</h2>
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

function SupportPage() {
  return (
    <section className="support-page">
      <div className="support-content">
        <span className="support-emoji">📡</span>
        <h1 className="support-title">Transmit a Signal</h1>
        <p className="support-subtitle">
          Got a question, bug report, or just want to talk about bats?
        </p>

        <div className="support-cards">
          <a href="mailto:support@tinkerbattech.com" className="support-card">
            <span className="support-card-icon">📧</span>
            <span className="support-card-label">Email</span>
            <span className="support-card-value">
              support@tinkerbattech.com
            </span>
          </a>

          <div className="support-card">
            <span className="support-card-icon">🏠</span>
            <span className="support-card-label">Headquarters</span>
            <span className="support-card-value">Somewhere in Time</span>
          </div>

          <div className="support-card">
            <span className="support-card-icon">🦇</span>
            <span className="support-card-label">Bat Count</span>
            <span className="support-card-value">Immeasurable</span>
          </div>
        </div>

        <div className="support-footer-note">
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
        <img
          src="/artemis_tinkerbat-cropped.png"
          alt="TinkerBat"
          className="footer-logo"
        />
        <nav className="footer-links">
          <button onClick={() => onNavigate("privacy")}>Privacy Policy</button>
          <button onClick={() => onNavigate("terms")}>Terms of Use</button>
          <button onClick={() => onNavigate("support")}>Support</button>
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
      {currentPage === "support" && <SupportPage />}

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
