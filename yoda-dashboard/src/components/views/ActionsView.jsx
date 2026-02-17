export default function ActionsView() {
  return (
    <div className="animate-fadeIn">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)' }}>Action Items</h2>
          <p style={{ color: 'var(--text-secondary)' }}>18 open · 3 overdue · 42 completed this month</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <select style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-secondary)' }}>
            <option>All Status</option>
            <option>Open</option>
            <option>Overdue</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <select style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-secondary)' }}>
            <option>All Owners</option>
            <option>Assigned to Me</option>
            <option>Assigned by Me</option>
            <option>My Direct Reports</option>
          </select>
          <select style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-secondary)' }}>
            <option>All Sources</option>
            <option>Pipeline Review</option>
            <option>Board Meetings</option>
            <option>1:1s</option>
          </select>
        </div>
      </div>

      {/* Overdue Section */}
      <div className="card" style={{ borderColor: 'rgba(239, 68, 68, 0.3)' }}>
        <div className="card-title" style={{ color: '#ef4444', marginBottom: '16px' }}>⚠️ Overdue (3)</div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot red"></div>
            <div className="action-content">
              <div className="action-title">Review and approve Q4 revised forecast</div>
              <div className="action-meta">Owner: Ravi Kumar · Due: Jan 24 (3 days overdue)</div>
              <div className="action-meta">Source: Pipeline Review - Jan 20 · <span style={{ color: '#3b82f6', cursor: 'pointer' }}>View meeting →</span></div>
            </div>
          </div>
          <span className="tag tag-red">3 days overdue</span>
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot red"></div>
            <div className="action-content">
              <div className="action-title">Complete security questionnaire for TechFlow</div>
              <div className="action-meta">Owner: Sarah Chen · Due: Jan 25 (2 days overdue)</div>
              <div className="action-meta">Source: Email thread with TechFlow · <span style={{ color: '#3b82f6', cursor: 'pointer' }}>View email →</span></div>
            </div>
          </div>
          <span className="tag tag-red">2 days overdue</span>
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot red"></div>
            <div className="action-content">
              <div className="action-title">Send customer reference list to GlobalSys</div>
              <div className="action-meta">Owner: Tom Williams · Due: Jan 26 (1 day overdue)</div>
              <div className="action-meta">Source: Sales Sync - Jan 22 · <span style={{ color: '#3b82f6', cursor: 'pointer' }}>View meeting →</span></div>
            </div>
          </div>
          <span className="tag tag-red">1 day overdue</span>
        </div>
      </div>

      {/* Due Today/Tomorrow */}
      <div className="card">
        <div className="card-title" style={{ color: '#f59e0b', marginBottom: '16px' }}>📅 Due Soon</div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot yellow"></div>
            <div className="action-content">
              <div className="action-title">Sign off on Series C term sheet amendments</div>
              <div className="action-meta">Owner: You · Due: Today EOD</div>
              <div className="action-meta">Source: Board Meeting - Jan 20</div>
            </div>
          </div>
          <span className="tag tag-yellow">Due today</span>
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot yellow"></div>
            <div className="action-content">
              <div className="action-title">Approve marketing budget increase (15%)</div>
              <div className="action-meta">Owner: You · Due: Tomorrow</div>
              <div className="action-meta">Source: Budget Review - Jan 23</div>
            </div>
          </div>
          <span className="tag tag-yellow">Due tomorrow</span>
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot yellow"></div>
            <div className="action-content">
              <div className="action-title">Prepare revised Q4 forecast (TechFlow adjusted)</div>
              <div className="action-meta">Owner: Ravi Kumar · Due: Jan 28</div>
              <div className="action-meta">Source: Pipeline Review - Jan 27</div>
            </div>
          </div>
          <span className="tag tag-yellow">Due in 1 day</span>
        </div>
      </div>

      {/* In Progress */}
      <div className="card">
        <div className="card-title" style={{ color: '#3b82f6', marginBottom: '16px' }}>🔄 In Progress (5)</div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot blue"></div>
            <div className="action-content">
              <div className="action-title">Schedule executive sponsor call with Acme Corp CEO</div>
              <div className="action-meta">Owner: You · Due: Jan 29 · EA coordinating calendars</div>
              <div className="action-meta">Source: Pipeline Review - Jan 27</div>
            </div>
          </div>
          <span className="tag tag-blue">In progress</span>
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot blue"></div>
            <div className="action-content">
              <div className="action-title">Source integration contractor through vendor network</div>
              <div className="action-meta">Owner: Sarah Chen · Due: Jan 31 · 3 candidates identified</div>
              <div className="action-meta">Source: Pipeline Review - Jan 27</div>
            </div>
          </div>
          <span className="tag tag-blue">In progress</span>
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot blue"></div>
            <div className="action-content">
              <div className="action-title">Finalize Q1 hiring plan for engineering</div>
              <div className="action-meta">Owner: Sarah Chen · Due: Feb 1 · Draft under review</div>
              <div className="action-meta">Source: 1:1 with Sarah - Jan 20</div>
            </div>
          </div>
          <span className="tag tag-blue">In progress</span>
        </div>
      </div>

      {/* Upcoming */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '16px' }}>📋 Upcoming (7)</div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot green"></div>
            <div className="action-content">
              <div className="action-title">Review board deck final version</div>
              <div className="action-meta">Owner: You · Due: Feb 1</div>
              <div className="action-meta">Source: Board Prep - Jan 27</div>
            </div>
          </div>
          <span className="tag tag-green">On track</span>
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot green"></div>
            <div className="action-content">
              <div className="action-title">Prepare GlobalSys technical requirements document</div>
              <div className="action-meta">Owner: Tom Williams · Due: Feb 3</div>
              <div className="action-meta">Source: Pipeline Review - Jan 27</div>
            </div>
          </div>
          <span className="tag tag-green">On track</span>
        </div>
        <div className="action-item">
          <div className="action-left">
            <div className="action-dot green"></div>
            <div className="action-content">
              <div className="action-title">Present marketing campaign performance to board</div>
              <div className="action-meta">Owner: Lisa Park · Due: Feb 5</div>
              <div className="action-meta">Source: Marketing Review - Jan 22</div>
            </div>
          </div>
          <span className="tag tag-green">On track</span>
        </div>
      </div>
    </div>
  )
}
