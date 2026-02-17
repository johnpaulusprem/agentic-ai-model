export default function TopBar() {
  return (
    <div className="topbar">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search meetings, documents, people..." />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div className="status">
          <div className="status-dot"></div>
          <span className="status-text">Connected to M365</span>
        </div>
        <div style={{ position: 'relative' }}>
          <span style={{ cursor: 'pointer', fontSize: '20px' }}>🔔</span>
          <span style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            width: '18px',
            height: '18px',
            background: '#ef4444',
            borderRadius: '50%',
            fontSize: '11px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 600,
          }}>3</span>
        </div>
        <div className="avatar">AK</div>
      </div>
    </div>
  )
}
