export default function DigestView() {
  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <h1>Weekly Digest</h1>
        <p>Week of January 20-26, 2026</p>
      </div>

      <div className="card">
        <div className="digest-section">
          <div className="digest-title">📅 Meetings Summary</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '16px' }}>
            <div style={{ textAlign: 'center', padding: '16px', background: 'var(--bg-hover)', borderRadius: '12px' }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>24</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Total Meetings</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'var(--bg-hover)', borderRadius: '12px' }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>18.5 hrs</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Time in Meetings</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'var(--bg-hover)', borderRadius: '12px' }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#10b981' }}>12</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Decisions Made</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'var(--bg-hover)', borderRadius: '12px' }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#f59e0b' }}>28</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Actions Created</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="digest-section">
          <div className="digest-title">✅ Key Decisions This Week</div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#10b981' }}></div>
            <div>
              <div className="context-text">Approved pivot to enterprise-only sales focus for Q4</div>
              <div className="context-meta">Pipeline Review · Jan 20</div>
            </div>
          </div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#10b981' }}></div>
            <div>
              <div className="context-text">Approved 15% marketing budget increase for Q1</div>
              <div className="context-meta">Budget Review · Jan 23</div>
            </div>
          </div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#10b981' }}></div>
            <div>
              <div className="context-text">Decided to hire 2 enterprise AEs, promote internally for SMB</div>
              <div className="context-meta">Pipeline Review · Jan 20</div>
            </div>
          </div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#10b981' }}></div>
            <div>
              <div className="context-text">Approved contractor hire for integration backlog</div>
              <div className="context-meta">Eng Review · Jan 24</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="digest-section">
          <div className="digest-title">⚠️ Items Needing Follow-up</div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#ef4444' }}></div>
            <div>
              <div className="context-text">Ravi's Q4 forecast still not received (due Jan 24)</div>
              <div className="context-meta">3 days overdue · Follow up recommended</div>
            </div>
          </div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#f59e0b' }}></div>
            <div>
              <div className="context-text">TechFlow deal risk - procurement delays ongoing</div>
              <div className="context-meta">May slip to Q1 · Decision pending</div>
            </div>
          </div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#f59e0b' }}></div>
            <div>
              <div className="context-text">Board deck needs final review before Feb 5 meeting</div>
              <div className="context-meta">47 pages · High priority</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="digest-section">
          <div className="digest-title">📈 Project Updates</div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#10b981' }}></div>
            <div>
              <div className="context-text"><strong>Project Nexus:</strong> Phase 2 at 70% completion. On track for Feb 22 delivery.</div>
              <div className="context-meta">Owner: Sarah Chen</div>
            </div>
          </div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#f59e0b' }}></div>
            <div>
              <div className="context-text"><strong>Q4 Pipeline:</strong> $8.1M current vs $5.5M target. TechFlow at risk.</div>
              <div className="context-meta">Owner: Ravi Kumar</div>
            </div>
          </div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#10b981' }}></div>
            <div>
              <div className="context-text"><strong>Series C:</strong> Term sheet amendments ready for signature.</div>
              <div className="context-meta">Owner: Priya Sharma</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="digest-section">
          <div className="digest-title">👥 People Notes</div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#3b82f6' }}></div>
            <div>
              <div className="context-text"><strong>Lisa Park</strong> - Last 1:1 was 3 weeks ago. Consider scheduling.</div>
              <div className="context-meta">Marketing initiatives need alignment</div>
            </div>
          </div>
          <div className="context-item">
            <div className="context-dot" style={{ background: '#3b82f6' }}></div>
            <div>
              <div className="context-text"><strong>Tom Williams</strong> - Completing 90 days in role next week.</div>
              <div className="context-meta">Schedule performance check-in</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
