
function Topbar({ period, setPeriod, theme, setTheme }) {
  return (
    <header className="topbar">
      <h2 className="brand-name">TimeFrame</h2>

      <div className="period-tabs">
        {["Daily", "Weekly", "Monthly"].map((item) => (
          <button
            key={item}
            className={period === item ? "selected" : ""}
            onClick={() => setPeriod(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="top-actions">
        <div className="theme-switch">
          <button
            className={theme === "Dark" ? "theme-active" : ""}
            onClick={() => setTheme("Dark")}
          >
            Dark
          </button>

          <button
            className={theme === "Light" ? "theme-active" : ""}
            onClick={() => setTheme("Light")}
          >
            ☼ Light
          </button>
        </div>

        <button className="notification">🔔</button>
        <div className="avatar">👨🏻</div>
      </div>
    </header>
  );
}

export default Topbar;
