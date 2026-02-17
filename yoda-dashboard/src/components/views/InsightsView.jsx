export default function InsightsView() {
  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <h1>Insights</h1>
        <p>AI-generated patterns and observations from your meetings and communications</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        <div className="insight-card">
          <div className="insight-header">
            <div className="insight-icon" style={{ background: 'rgba(239, 68, 68, 0.2)' }}>⏰</div>
            <div>
              <div className="insight-title">Meeting Time Analysis</div>
              <div className="insight-subtitle">Last 30 days</div>
            </div>
          </div>
          <div className="insight-metric">32 hrs/week</div>
          <div className="insight-content">
            You spend 32 hours/week in meetings, up 15% from last month. 45% are recurring, 30% are 1:1s. Consider delegating recurring ops reviews to direct reports.
          </div>
        </div>
        <div className="insight-card">
          <div className="insight-header">
            <div className="insight-icon" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>📋</div>
            <div>
              <div className="insight-title">Action Item Completion</div>
              <div className="insight-subtitle">Last 30 days</div>
            </div>
          </div>
          <div className="insight-metric">73%</div>
          <div className="insight-content">
            73% of action items are completed on time, down from 82% last month. Sales team has highest overdue rate (35%). Engineering is at 95% completion.
          </div>
        </div>
        <div className="insight-card">
          <div className="insight-header">
            <div className="insight-icon" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>✅</div>
            <div>
              <div className="insight-title">Decision Velocity</div>
              <div className="insight-subtitle">Last 30 days</div>
            </div>
          </div>
          <div className="insight-metric">4.2 days</div>
          <div className="insight-content">
            Average time from decision request to resolution is 4.2 days. Budget decisions take longest (7.3 days). Hiring decisions are fastest (2.1 days).
          </div>
        </div>
        <div className="insight-card">
          <div className="insight-header">
            <div className="insight-icon" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>👥</div>
            <div>
              <div className="insight-title">Collaboration Patterns</div>
              <div className="insight-subtitle">Last 30 days</div>
            </div>
          </div>
          <div className="insight-metric">8 people</div>
          <div className="insight-content">
            You interact most frequently with Ravi Kumar (Sales), Sarah Chen (Eng), and Priya Sharma (Finance). Consider scheduling more time with Lisa Park (Marketing) - last 1:1 was 3 weeks ago.
          </div>
        </div>
      </div>
      <div className="card" style={{ marginTop: '16px' }}>
        <div className="card-title" style={{ marginBottom: '16px' }}>🔍 Notable Patterns</div>
        <div className="context-item">
          <div className="context-dot" style={{ background: '#f59e0b' }}></div>
          <div>
            <div className="context-text"><strong>Recurring Topic:</strong> "Engineering capacity" mentioned in 8 meetings this month</div>
            <div className="context-meta">Consider dedicated capacity planning session</div>
          </div>
        </div>
        <div className="context-item">
          <div className="context-dot" style={{ background: '#3b82f6' }}></div>
          <div>
            <div className="context-text"><strong>Decision Reversal:</strong> 2 decisions from December were revisited this month</div>
            <div className="context-meta">Both related to Q4 pipeline strategy</div>
          </div>
        </div>
        <div className="context-item">
          <div className="context-dot" style={{ background: '#10b981' }}></div>
          <div>
            <div className="context-text"><strong>Positive Trend:</strong> Meeting duration down 12% vs last month</div>
            <div className="context-meta">More meetings ending early or on time</div>
          </div>
        </div>
      </div>
    </div>
  )
}
