
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-symbol">◉</div>

      <nav className="side-nav">
        <button title="Home">⌂</button>
        <button title="Dashboard">▣</button>
        <button className="active" title="Calendar">▦</button>
        <button title="Messages">▤</button>
        <button title="Settings">⚙</button>
      </nav>

      <button className="logout" title="Logout">⇥</button>
    </aside>
  );
}

export default Sidebar;
