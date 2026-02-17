export default function BriefView({ showView }) {
  return (
    <div className="animate-fadeIn">
      <div className="back-link" onClick={() => showView('dashboard')}>← Back to Dashboard</div>
      <div className="brief-header">
        <div>
          <div className="brief-title">Q4 Pipeline Review</div>
          <div className="brief-meta">Today at 9:00 AM · Conference Room A · 60 min · Recurring Weekly</div>
        </div>
        <div className="brief-timer">
          <span>⏱️</span> Starts in 28 min
        </div>
      </div>

      {/* Attendees */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '16px' }}>Attendees (6)</div>
        <div className="attendee-grid">
          <div className="attendee">
            <div className="attendee-avatar">RK</div>
            <div className="attendee-info">
              <div className="attendee-name">Ravi Kumar</div>
              <div className="attendee-role">VP Sales · Reports to you</div>
              <div className="attendee-context">Has overdue action item</div>
            </div>
          </div>
          <div className="attendee">
            <div className="attendee-avatar">SC</div>
            <div className="attendee-info">
              <div className="attendee-name">Sarah Chen</div>
              <div className="attendee-role">VP Engineering · Reports to you</div>
              <div className="attendee-context">Last 1:1 was Jan 20</div>
            </div>
          </div>
          <div className="attendee">
            <div className="attendee-avatar">MJ</div>
            <div className="attendee-info">
              <div className="attendee-name">Mike Johnson</div>
              <div className="attendee-role">Finance Director · Reports to Priya</div>
              <div className="attendee-context">Prepared Q4 model</div>
            </div>
          </div>
          <div className="attendee">
            <div className="attendee-avatar">LP</div>
            <div className="attendee-info">
              <div className="attendee-name">Lisa Park</div>
              <div className="attendee-role">VP Marketing · Reports to you</div>
              <div className="attendee-context">Requesting budget increase</div>
            </div>
          </div>
          <div className="attendee">
            <div className="attendee-avatar">TW</div>
            <div className="attendee-info">
              <div className="attendee-name">Tom Williams</div>
              <div className="attendee-role">Head of Operations · Reports to you</div>
              <div className="attendee-context">New in role (3 months)</div>
            </div>
          </div>
          <div className="attendee">
            <div className="attendee-avatar" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>AK</div>
            <div className="attendee-info">
              <div className="attendee-name">You (Arun Kumar)</div>
              <div className="attendee-role">CEO · Meeting Host</div>
              <div className="attendee-context">Organized this series</div>
            </div>
          </div>
        </div>
      </div>

      {/* From Last Meeting */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '16px' }}>From Last Meeting (Jan 20)</div>
        <div className="context-item">
          <div className="context-dot" style={{ background: '#10b981' }}></div>
          <div>
            <div className="context-text"><strong>Decision:</strong> Focus on enterprise segment ($100K+ deals), pause SMB outbound until Q2</div>
            <div className="context-meta">Unanimous agreement · You made the final call</div>
          </div>
        </div>
        <div className="context-item">
          <div className="context-dot" style={{ background: '#10b981' }}></div>
          <div>
            <div className="context-text"><strong>Decision:</strong> Hire 2 additional enterprise AEs, promote internally for SMB lead</div>
            <div className="context-meta">Budget approved by Priya · Ravi to execute</div>
          </div>
        </div>
        <div className="context-item">
          <div className="context-dot" style={{ background: '#ef4444' }}></div>
          <div>
            <div className="context-text"><strong>Action (Overdue):</strong> Ravi to provide revised Q4 forecast reflecting enterprise focus</div>
            <div className="context-meta" style={{ color: '#ef4444', fontWeight: 500 }}>⚠️ Due Jan 24 · Not yet received · Follow up recommended</div>
          </div>
        </div>
        <div className="context-item">
          <div className="context-dot" style={{ background: '#3b82f6' }}></div>
          <div>
            <div className="context-text"><strong>Metric:</strong> Q3 closed at $4.2M (108% of target). Q4 target is $5.5M.</div>
            <div className="context-meta">From Q3 Final Report · Current pipeline: $8.1M (1.47x coverage)</div>
          </div>
        </div>
        <div className="context-item">
          <div className="context-dot" style={{ background: '#f59e0b' }}></div>
          <div>
            <div className="context-text"><strong>Risk Flagged:</strong> TechFlow deal ($450K) has procurement delays - may slip to Q1</div>
            <div className="context-meta">Ravi mentioned legal review taking longer than expected</div>
          </div>
        </div>
      </div>

      {/* Relevant Documents */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '16px' }}>Relevant Documents (Updated This Week)</div>
        <div className="doc-item">
          <div className="doc-left">
            <span className="doc-icon">📊</span>
            <div>
              <div className="doc-name">Q4 Pipeline Model v2.xlsx</div>
              <div className="doc-updated">Updated yesterday by Ravi · 12 sheets · Key changes to Stage 3 deals</div>
            </div>
          </div>
          <span style={{ color: 'var(--text-muted)' }}>↗️</span>
        </div>
        <div className="doc-item">
          <div className="doc-left">
            <span className="doc-icon">📄</span>
            <div>
              <div className="doc-name">Enterprise Target Account List.docx</div>
              <div className="doc-updated">Updated 2 days ago by Ravi · 47 accounts · 12 new additions</div>
            </div>
          </div>
          <span style={{ color: 'var(--text-muted)' }}>↗️</span>
        </div>
        <div className="doc-item">
          <div className="doc-left">
            <span className="doc-icon">📑</span>
            <div>
              <div className="doc-name">Competitive Win-Loss Analysis Q3.pptx</div>
              <div className="doc-updated">Updated 3 days ago by Lisa · 24 slides · Win rate: 34%</div>
            </div>
          </div>
          <span style={{ color: 'var(--text-muted)' }}>↗️</span>
        </div>
        <div className="doc-item">
          <div className="doc-left">
            <span className="doc-icon">📈</span>
            <div>
              <div className="doc-name">Sales Compensation Plan 2026.pdf</div>
              <div className="doc-updated">Shared 4 days ago by Priya · Pending your review</div>
            </div>
          </div>
          <span style={{ color: 'var(--text-muted)' }}>↗️</span>
        </div>
      </div>

      {/* Related Email Threads */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '16px' }}>Related Email Threads</div>
        <div className="context-item">
          <div className="context-dot" style={{ background: '#3b82f6' }}></div>
          <div>
            <div className="context-text"><strong>Re: Acme Corp Enterprise Deal</strong></div>
            <div className="context-meta">From Ravi · "They've confirmed budget, need exec sponsor call. Can you join Thursday?" · Yesterday</div>
          </div>
        </div>
        <div className="context-item">
          <div className="context-dot" style={{ background: '#f59e0b' }}></div>
          <div>
            <div className="context-text"><strong>FW: TechFlow Procurement Update</strong></div>
            <div className="context-meta">From Ravi · "Legal asking for additional security questionnaire. 2 week delay likely." · 2 days ago</div>
          </div>
        </div>
      </div>

      {/* Suggested Topics */}
      <div className="suggestion-box">
        <div className="suggestion-title">
          <span>🧠</span> Suggested Topics & Questions
        </div>
        <div className="suggestion-item" onClick={() => showView('chat')}>
          <span>›</span>
          <span>Follow up on Ravi's overdue forecast - what's blocking delivery?</span>
        </div>
        <div className="suggestion-item" onClick={() => showView('chat')}>
          <span>›</span>
          <span>Pipeline coverage is 1.47x - is this sufficient given enterprise focus?</span>
        </div>
        <div className="suggestion-item" onClick={() => showView('chat')}>
          <span>›</span>
          <span>TechFlow slip risk - what's the impact on Q4 if it moves to Q1?</span>
        </div>
        <div className="suggestion-item" onClick={() => showView('chat')}>
          <span>›</span>
          <span>Enterprise AE hiring - timeline and candidate pipeline status?</span>
        </div>
        <div className="suggestion-item" onClick={() => showView('chat')}>
          <span>›</span>
          <span>How has pipeline changed since pivoting to enterprise focus?</span>
        </div>
      </div>
    </div>
  )
}
