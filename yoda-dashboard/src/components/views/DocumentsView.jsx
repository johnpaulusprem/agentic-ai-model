export default function DocumentsView() {
  return (
    <div className="animate-fadeIn">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)' }}>Documents</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Recently accessed and relevant documents from SharePoint & OneDrive</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <select style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-secondary)' }}>
            <option>All Types</option>
            <option>Presentations</option>
            <option>Spreadsheets</option>
            <option>Documents</option>
            <option>PDFs</option>
          </select>
          <select style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-secondary)' }}>
            <option>Recently Updated</option>
            <option>Most Relevant</option>
            <option>Shared with Me</option>
          </select>
        </div>
      </div>

      {/* Needs Review */}
      <div className="card" style={{ borderColor: 'rgba(139, 92, 246, 0.3)' }}>
        <div className="card-title" style={{ color: '#8b5cf6', marginBottom: '16px' }}>📌 Needs Your Review (7)</div>
        <div className="doc-card">
          <div className="doc-card-icon">📊</div>
          <div className="doc-card-info">
            <div className="doc-card-name">Board Deck Q4 2025 v3.pptx</div>
            <div className="doc-card-meta">Updated 2 hours ago by Priya Sharma · 47 slides · Shared for your review</div>
          </div>
          <span className="tag tag-red">High Priority</span>
        </div>
        <div className="doc-card">
          <div className="doc-card-icon">📄</div>
          <div className="doc-card-info">
            <div className="doc-card-name">Series C Term Sheet - Amended.pdf</div>
            <div className="doc-card-meta">Shared yesterday by Legal · 12 pages · Signature required</div>
          </div>
          <span className="tag tag-red">Action Required</span>
        </div>
        <div className="doc-card">
          <div className="doc-card-icon">📈</div>
          <div className="doc-card-info">
            <div className="doc-card-name">Sales Compensation Plan 2026.pdf</div>
            <div className="doc-card-meta">Shared 4 days ago by Priya Sharma · 8 pages · Approval needed</div>
          </div>
          <span className="tag tag-yellow">Pending Review</span>
        </div>
      </div>

      {/* Recently Updated */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '16px' }}>Recently Updated</div>
        <div className="doc-card">
          <div className="doc-card-icon">📊</div>
          <div className="doc-card-info">
            <div className="doc-card-name">Q4 Pipeline Model v2.xlsx</div>
            <div className="doc-card-meta">Updated yesterday by Ravi Kumar · 12 sheets · Sales/Pipeline folder</div>
          </div>
        </div>
        <div className="doc-card">
          <div className="doc-card-icon">📄</div>
          <div className="doc-card-info">
            <div className="doc-card-name">Enterprise Target Account List.docx</div>
            <div className="doc-card-meta">Updated 2 days ago by Ravi Kumar · 47 accounts · Sales/Accounts folder</div>
          </div>
        </div>
        <div className="doc-card">
          <div className="doc-card-icon">📑</div>
          <div className="doc-card-info">
            <div className="doc-card-name">Competitive Win-Loss Analysis Q3.pptx</div>
            <div className="doc-card-meta">Updated 3 days ago by Lisa Park · 24 slides · Marketing folder</div>
          </div>
        </div>
        <div className="doc-card">
          <div className="doc-card-icon">📄</div>
          <div className="doc-card-info">
            <div className="doc-card-name">Q1 Engineering Hiring Plan.docx</div>
            <div className="doc-card-meta">Updated 4 days ago by Sarah Chen · Draft · Engineering folder</div>
          </div>
        </div>
        <div className="doc-card">
          <div className="doc-card-icon">📊</div>
          <div className="doc-card-info">
            <div className="doc-card-name">Monthly KPI Dashboard - Jan 2026.xlsx</div>
            <div className="doc-card-meta">Updated 5 days ago by Mike Johnson · Finance folder</div>
          </div>
        </div>
      </div>

      {/* Meeting Documents */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '16px' }}>Related to Today's Meetings</div>
        <div className="doc-card">
          <div className="doc-card-icon">📋</div>
          <div className="doc-card-info">
            <div className="doc-card-name">Q4 Pipeline Review - Agenda.docx</div>
            <div className="doc-card-meta">For: 9:00 AM meeting · Created by you</div>
          </div>
        </div>
        <div className="doc-card">
          <div className="doc-card-icon">📊</div>
          <div className="doc-card-info">
            <div className="doc-card-name">Product Roadmap Q1-Q2 2026.pptx</div>
            <div className="doc-card-meta">For: 12:00 PM meeting · Updated by Product team</div>
          </div>
        </div>
        <div className="doc-card">
          <div className="doc-card-icon">📄</div>
          <div className="doc-card-info">
            <div className="doc-card-name">Customer Success Weekly Metrics.xlsx</div>
            <div className="doc-card-meta">For: 4:00 PM meeting · Auto-updated dashboard</div>
          </div>
        </div>
      </div>
    </div>
  )
}
