
function WelcomeSection({ onAddSport }) {
  return (
    <section className="welcome-section">
      <div>
        <p className="welcome-subtitle">YOUR PRODUCTIVITY SPACE</p>
        <h1>Welcome Back!</h1>
        <p>Plan your day and stay active.</p>
      </div>

      <button className="add-sport" onClick={onAddSport}>
        <span>+</span> Add Sport
      </button>
    </section>
  );
}

export default WelcomeSection;
