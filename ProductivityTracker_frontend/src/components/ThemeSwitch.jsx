
function ThemeSwitch({ theme, setTheme }) {
  return (
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
  );
}

export default ThemeSwitch;
