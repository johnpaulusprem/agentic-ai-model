export default function MeetingsView({ showView }) {
  return (
    <div className="animate-fadeIn">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)' }}>Meetings</h2>
          <p style={{ color: 'var(--text-secondary)' }}>This week: 24 meetings · 18.5 hours</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-secondary">Today</button>
          <button className="btn btn-secondary">This Week</button>
          <button className="btn btn-secondary">This Month</button>
        </div>
      </div>

      <div className="card">
        <div className="card-title" style={{ marginBottom: '16px' }}>Today - Monday, Jan 27</div>
        <div className="meeting-item" onClick={() => showView('brief')}>
          <div className="meeting-left">
            <div className="meeting-time">9:00 AM</div>
            <div className="meeting-info">
              <div className="meeting-title">Q4 Pipeline Review</div>
              <div className="meeting-attendees">6 attendees · Conf Room A · 60 min</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-green">Brief Ready</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
        <div className="meeting-item" onClick={() => showView('brief')}>
          <div className="meeting-left">
            <div className="meeting-time">10:30 AM</div>
            <div className="meeting-info">
              <div className="meeting-title">1:1 with Priya Sharma (CFO)</div>
              <div className="meeting-attendees">Your Office · 30 min</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-green">Brief Ready</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
        <div className="meeting-item" onClick={() => showView('brief')}>
          <div className="meeting-left">
            <div className="meeting-time">12:00 PM</div>
            <div className="meeting-info">
              <div className="meeting-title">Product Roadmap Quarterly Review</div>
              <div className="meeting-attendees">8 attendees · Teams · 90 min</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-green">Brief Ready</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
        <div className="meeting-item" onClick={() => showView('brief')}>
          <div className="meeting-left">
            <div className="meeting-time">2:30 PM</div>
            <div className="meeting-info">
              <div className="meeting-title">Board Deck Review</div>
              <div className="meeting-attendees">5 attendees · Exec Boardroom · 60 min</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-red">High Priority</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title" style={{ marginBottom: '16px' }}>Tomorrow - Tuesday, Jan 28</div>
        <div className="meeting-item">
          <div className="meeting-left">
            <div className="meeting-time">9:00 AM</div>
            <div className="meeting-info">
              <div className="meeting-title">Leadership Team Weekly</div>
              <div className="meeting-attendees">7 attendees · Conf Room A · 60 min</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-blue">Recurring</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
        <div className="meeting-item">
          <div className="meeting-left">
            <div className="meeting-time">11:00 AM</div>
            <div className="meeting-info">
              <div className="meeting-title">Acme Corp Exec Call</div>
              <div className="meeting-attendees">External · Teams · 45 min</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-purple">External</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
        <div className="meeting-item">
          <div className="meeting-left">
            <div className="meeting-time">2:00 PM</div>
            <div className="meeting-info">
              <div className="meeting-title">1:1 with Ravi Kumar (VP Sales)</div>
              <div className="meeting-attendees">His Office · 30 min</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-yellow">Follow-up Needed</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
      </div>
    </div>
  )
}
