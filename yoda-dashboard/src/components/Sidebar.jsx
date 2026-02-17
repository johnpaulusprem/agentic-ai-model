export default function Sidebar({ activeNav, showView, theme, toggleTheme }) {
  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'chat', icon: '💬', label: 'Ask AI' },
    { id: 'meetings', icon: '📅', label: 'Meetings' },
    { id: 'actions', icon: '✅', label: 'Action Items' },
    { id: 'documents', icon: '📁', label: 'Documents' },
    { id: 'insights', icon: '📈', label: 'Insights' },
    { id: 'digest', icon: '📋', label: 'Weekly Digest' },
  ]

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">🧠</div>
        <div className="logo-text">
          <h1>CXO Companion</h1>
          <p>Executive AI Assistant</p>
        </div>
      </div>
      <nav className="nav">
        {navItems.map(item => (
          <div
            key={item.id}
            className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
            onClick={() => showView(item.id)}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
      <div className="theme-toggle" onClick={toggleTheme}>
        <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
        <div className="theme-toggle-track">
          <div className="theme-toggle-thumb"></div>
        </div>
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          {theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      </div>
      <div style={{ padding: '12px', borderTop: '1px solid var(--border-primary)' }}>
        <div className="nav-item">
          <span>⚙️</span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}
