export default function DashboardView({ showView }) {
  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <h1>Good morning, Arun</h1>
        <p>Monday, January 27, 2026 • You have 6 meetings today</p>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat-card" onClick={() => showView('meetings')}>
          <div className="stat-header">
            <span style={{ color: '#3b82f6', fontSize: '24px' }}>📅</span>
            <span className="stat-value">6</span>
          </div>
          <div className="stat-label">Meetings Today</div>
          <div className="stat-trend up">↑ 2 more than average</div>
        </div>
        <div className="stat-card" onClick={() => showView('actions')}>
          <div className="stat-header">
            <span style={{ color: '#f59e0b', fontSize: '24px' }}>✅</span>
            <span className="stat-value">18</span>
          </div>
          <div className="stat-label">Open Actions</div>
          <div className="stat-trend down">↑ 5 from last week</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <span style={{ color: '#ef4444', fontSize: '24px' }}>⚠️</span>
            <span className="stat-value">3</span>
          </div>
          <div className="stat-label">Overdue Items</div>
          <div className="stat-trend down">Needs attention</div>
        </div>
        <div className="stat-card" onClick={() => showView('documents')}>
          <div className="stat-header">
            <span style={{ color: '#10b981', fontSize: '24px' }}>📄</span>
            <span className="stat-value">7</span>
          </div>
          <div className="stat-label">Docs to Review</div>
          <div className="stat-trend">3 high priority</div>
        </div>
      </div>

      {/* Today's Meetings */}
      <div className="card">
        <div className="card-header">
          <span className="card-title">Today's Meetings</span>
          <span
            style={{ color: '#3b82f6', fontSize: '14px', cursor: 'pointer' }}
            onClick={() => showView('meetings')}
          >View all →</span>
        </div>
        <div className="meeting-item" onClick={() => showView('brief')}>
          <div className="meeting-left">
            <div className="meeting-time">9:00 AM</div>
            <div className="meeting-info">
              <div className="meeting-title">Q4 Pipeline Review</div>
              <div className="meeting-attendees">Ravi Kumar, Sarah Chen, Mike Johnson +3 • Conf Room A</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-green">Brief Ready</span>
            <span className="tag tag-red">High Priority</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
        <div className="meeting-item" onClick={() => showView('brief')}>
          <div className="meeting-left">
            <div className="meeting-time">10:30 AM</div>
            <div className="meeting-info">
              <div className="meeting-title">1:1 with CFO (Priya Sharma)</div>
              <div className="meeting-attendees">Budget discussion, Q1 planning • Your Office</div>
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
              <div className="meeting-attendees">Product, Engineering, Design leads • Teams Call</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-green">Brief Ready</span>
            <span className="tag tag-yellow">Decision Needed</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
        <div className="meeting-item" onClick={() => showView('brief')}>
          <div className="meeting-left">
            <div className="meeting-time">2:30 PM</div>
            <div className="meeting-info">
              <div className="meeting-title">Board Deck Review</div>
              <div className="meeting-attendees">Leadership Team • Exec Boardroom</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-red">High Priority</span>
            <span className="tag tag-purple">Prep Required</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
        <div className="meeting-item" onClick={() => showView('brief')}>
          <div className="meeting-left">
            <div className="meeting-time">4:00 PM</div>
            <div className="meeting-info">
              <div className="meeting-title">Customer Success Weekly</div>
              <div className="meeting-attendees">CS Team, Support Lead • Teams Call</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-green">Brief Ready</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
        <div className="meeting-item" onClick={() => showView('brief')}>
          <div className="meeting-left">
            <div className="meeting-time">5:30 PM</div>
            <div className="meeting-info">
              <div className="meeting-title">1:1 with VP Engineering (Vikram Patel)</div>
              <div className="meeting-attendees">Hiring plan, tech debt discussion • His Office</div>
            </div>
          </div>
          <div className="meeting-right">
            <span className="tag tag-green">Brief Ready</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        </div>
      </div>

      {/* Needs Attention */}
      <div className="attention-box">
        <div className="attention-title">
          <span style={{ color: '#ef4444' }}>⚠️</span> Needs Your Attention
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot red"></div>
            <div className="action-content">
              <div className="action-title">Review and approve Q4 revised forecast</div>
              <div className="action-meta">Owner: Ravi Kumar · Due: Yesterday · From: Pipeline Review - Jan 24</div>
            </div>
          </div>
          <span className="tag tag-red">OVERDUE</span>
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot red"></div>
            <div className="action-content">
              <div className="action-title">Sign off on Series C term sheet amendments</div>
              <div className="action-meta">Owner: You · Due: Today EOD · From: Board Meeting - Jan 20</div>
            </div>
          </div>
          <span className="tag tag-red">DUE TODAY</span>
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot yellow"></div>
            <div className="action-content">
              <div className="action-title">Approve marketing budget increase (15%)</div>
              <div className="action-meta">Owner: You · Due: Tomorrow · From: Budget Review - Jan 23</div>
            </div>
          </div>
          <span className="tag tag-yellow">Decision Pending</span>
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot yellow"></div>
            <div className="action-content">
              <div className="action-title">Review board deck draft before 2:30 PM meeting</div>
              <div className="action-meta">Owner: You · Due: Today 2:00 PM · 47 pages</div>
            </div>
          </div>
          <span className="tag tag-purple">Prep Required</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card" style={{ marginTop: '16px' }}>
        <div className="card-header">
          <span className="card-title">Recent Activity</span>
        </div>
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: '1px solid var(--border-secondary)' }}>
            <span>📄</span>
            <span><strong style={{ color: 'var(--text-primary)' }}>Board Deck v3.pptx</strong> updated by Priya Sharma • 2 hours ago</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: '1px solid var(--border-secondary)' }}>
            <span>✅</span>
            <span><strong style={{ color: 'var(--text-primary)' }}>Sarah Chen</strong> completed "Finalize Q1 hiring plan" • 3 hours ago</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: '1px solid var(--border-secondary)' }}>
            <span>💬</span>
            <span><strong style={{ color: 'var(--text-primary)' }}>Ravi Kumar</strong> mentioned you in Sales Channel • 4 hours ago</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
            <span>📅</span>
            <span><strong style={{ color: 'var(--text-primary)' }}>Meeting summary</strong> generated for "Ops Review" • Yesterday</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card" style={{ marginTop: '16px' }}>
        <div className="card-header">
          <span className="card-title">Quick Actions</span>
        </div>
        <div className="journeys">
          <div className="journey-btn" onClick={() => showView('brief')}>
            <div className="journey-icon">📅</div>
            <div className="journey-title">Pre-Meeting Brief</div>
          </div>
          <div className="journey-btn" onClick={() => showView('chat')}>
            <div className="journey-icon">💬</div>
            <div className="journey-title">Ask AI Anything</div>
          </div>
          <div className="journey-btn" onClick={() => showView('summary')}>
            <div className="journey-icon">📝</div>
            <div className="journey-title">Meeting Summary</div>
          </div>
          <div className="journey-btn" onClick={() => showView('actions')}>
            <div className="journey-icon">✅</div>
            <div className="journey-title">Track Actions</div>
          </div>
          <div className="journey-btn" onClick={() => showView('digest')}>
            <div className="journey-icon">📋</div>
            <div className="journey-title">Weekly Digest</div>
          </div>
        </div>
      </div>
    </div>
  )
}
