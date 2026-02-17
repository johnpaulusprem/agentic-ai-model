export default function SummaryView({ showView }) {
  return (
    <div className="animate-fadeIn">
      <div className="back-link" onClick={() => showView('dashboard')}>← Back to Dashboard</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '4px', color: 'var(--text-primary)' }}>Meeting Summary</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Q4 Pipeline Review · Jan 27, 9:00 AM · Duration: 58 min</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-secondary">✏️ Edit</button>
          <button className="btn btn-primary">📤 Share to Attendees</button>
        </div>
      </div>

      {/* Key Discussions */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '16px' }}>Key Discussion Points</div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Pipeline Status:</strong> Current pipeline stands at $8.1M against Q4 target of $5.5M (1.47x coverage). However, $2.3M is in early stages with low conversion probability.
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Enterprise Deals:</strong> Three major deals in final stages - Acme Corp ($800K, 90% probability), TechFlow ($450K, 60% - delayed), and GlobalSys ($600K, 75% probability).
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Marketing Request:</strong> Lisa presented case for 15% budget increase ($180K) for Q1 demand generation campaign targeting enterprise segment. ROI projection: 4.2x based on Q3 data.
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Resource Constraints:</strong> Sarah flagged that custom integration requests from enterprise deals are stretching engineering capacity. Current backlog: 6 weeks.
          </p>
          <p>
            <strong style={{ color: 'var(--text-primary)' }}>Hiring Update:</strong> 2 enterprise AE roles posted, 12 applicants in pipeline. Target start date: Feb 15 for first hire.
          </p>
        </div>
      </div>

      {/* Decisions Made */}
      <div className="decision-box">
        <div className="decision-title">
          <span>✅</span> Decisions Made (3)
        </div>
        <div className="context-item" style={{ background: 'var(--bg-hover)' }}>
          <div className="context-dot" style={{ background: '#10b981' }}></div>
          <div>
            <div className="context-text"><strong>Approved:</strong> 15% marketing budget increase for Q1 ($180K additional)</div>
            <div className="context-meta">Condition: Final sign-off from Priya by EOD Wednesday. Focus on enterprise demand gen only.</div>
          </div>
        </div>
        <div className="context-item" style={{ background: 'var(--bg-hover)' }}>
          <div className="context-dot" style={{ background: '#10b981' }}></div>
          <div>
            <div className="context-text"><strong>Decided:</strong> Prioritize Acme Corp and GlobalSys deals, deprioritize TechFlow until legal clears</div>
            <div className="context-meta">TechFlow moved to Q1 forecast. Ravi to communicate timeline expectations to TechFlow.</div>
          </div>
        </div>
        <div className="context-item" style={{ background: 'var(--bg-hover)' }}>
          <div className="context-dot" style={{ background: '#10b981' }}></div>
          <div>
            <div className="context-text"><strong>Decided:</strong> Hire 1 contractor for integration work to reduce backlog</div>
            <div className="context-meta">Sarah to source through preferred vendor. Budget: $25K/month for 3 months.</div>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="action-box">
        <div className="action-box-title">
          <span>⚡</span> Action Items (6)
        </div>
        <div className="action-item" style={{ background: 'var(--bg-hover)' }}>
          <div className="action-left">
            <div className="action-dot green"></div>
            <div className="action-content">
              <div className="action-title">Schedule executive sponsor call with Acme Corp CEO</div>
              <div className="action-meta">Owner: You (Arun) · Due: Jan 29 · High confidence</div>
            </div>
          </div>
        </div>
        <div className="action-item" style={{ background: 'var(--bg-hover)' }}>
          <div className="action-left">
            <div className="action-dot green"></div>
            <div className="action-content">
              <div className="action-title">Prepare revised Q4 forecast reflecting TechFlow move to Q1</div>
              <div className="action-meta">Owner: Ravi Kumar · Due: Jan 28 EOD · High confidence</div>
            </div>
          </div>
        </div>
        <div className="action-item" style={{ background: 'var(--bg-hover)' }}>
          <div className="action-left">
            <div className="action-dot green"></div>
            <div className="action-content">
              <div className="action-title">Submit marketing budget approval to Finance</div>
              <div className="action-meta">Owner: Lisa Park · Due: Jan 28 · High confidence</div>
            </div>
          </div>
        </div>
        <div className="action-item" style={{ background: 'var(--bg-hover)' }}>
          <div className="action-left">
            <div className="action-dot green"></div>
            <div className="action-content">
              <div className="action-title">Source integration contractor through vendor network</div>
              <div className="action-meta">Owner: Sarah Chen · Due: Jan 31 · High confidence</div>
            </div>
          </div>
        </div>
        <div className="action-item" style={{ background: 'var(--bg-hover)' }}>
          <div className="action-left">
            <div className="action-dot yellow"></div>
            <div className="action-content">
              <div className="action-title">Communicate Q1 timeline to TechFlow procurement team</div>
              <div className="action-meta">Owner: Ravi Kumar · Due: Jan 29 · Medium confidence (implicit)</div>
            </div>
          </div>
        </div>
        <div className="action-item" style={{ background: 'var(--bg-hover)' }}>
          <div className="action-left">
            <div className="action-dot yellow"></div>
            <div className="action-content">
              <div className="action-title">Prepare GlobalSys technical requirements document</div>
              <div className="action-meta">Owner: Tom Williams · Due: Feb 3 · Medium confidence (implicit)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Open Questions */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '16px' }}>Open Questions (3)</div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
          <div style={{ marginBottom: '12px', padding: '12px', background: 'var(--bg-hover)', borderRadius: '8px' }}>
            <strong style={{ color: 'var(--text-primary)' }}>1.</strong> What's the contingency plan if both TechFlow AND GlobalSys slip to Q1?
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Raised by Mike · Needs follow-up analysis</div>
          </div>
          <div style={{ marginBottom: '12px', padding: '12px', background: 'var(--bg-hover)', borderRadius: '8px' }}>
            <strong style={{ color: 'var(--text-primary)' }}>2.</strong> Should we increase enterprise AE hiring to 3 given pipeline growth?
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Raised by Ravi · Deferred to next week's review</div>
          </div>
          <div style={{ padding: '12px', background: 'var(--bg-hover)', borderRadius: '8px' }}>
            <strong style={{ color: 'var(--text-primary)' }}>3.</strong> Can contractors access our codebase for integration work?
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Raised by Sarah · Needs Legal/Security review</div>
          </div>
        </div>
      </div>

      {/* Conflict Detection */}
      <div className="conflict-box">
        <div className="conflict-title">
          <span>⚠️</span> Potential Conflict Detected
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
          Today's decision to <strong style={{ color: 'var(--text-primary)' }}>deprioritize TechFlow</strong> appears to conflict with the Jan 20 decision to <strong style={{ color: 'var(--text-primary)' }}>"pursue all three enterprise deals aggressively"</strong> and the commitment to TechFlow's procurement team for a February close.
          <br /><br />
          <span style={{ color: '#3b82f6', cursor: 'pointer' }}>📄 View Jan 20 meeting summary →</span>
        </p>
      </div>

      {/* Meeting Stats */}
      <div className="card" style={{ marginTop: '16px' }}>
        <div className="card-title" style={{ marginBottom: '16px' }}>Meeting Analytics</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)' }}>58 min</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Duration</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)' }}>6</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Participants</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 700, color: '#10b981' }}>3</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Decisions</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 700, color: '#f59e0b' }}>6</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Actions</div>
          </div>
        </div>
      </div>
    </div>
  )
}
