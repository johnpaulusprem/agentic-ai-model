import { useState, useRef, useEffect } from 'react'

const responses = {
  attention: {
    text: `<strong>🔴 Needs Your Attention Today:</strong><br><br>
<strong>OVERDUE (3 days):</strong> Ravi's Q4 forecast - still not received<br>
→ Recommend: Direct follow-up in your 2pm 1:1<br><br>
<strong>DUE TODAY EOD:</strong> Series C term sheet signature<br>
→ Document ready in SharePoint, 12 pages<br><br>
<strong>DUE TOMORROW:</strong> Marketing budget approval (15% increase)<br>
→ Lisa awaiting your decision, $180K additional<br><br>
<strong>PREP REQUIRED:</strong> Board deck review before 2:30pm meeting<br>
→ 47 pages, updated by Priya 2 hours ago`,
    sources: ['Action Tracker', 'Calendar', 'SharePoint'],
  },
  ravi: {
    text: `Based on meetings and emails from the past 30 days, <strong>Ravi Kumar</strong> has committed to:<br><br>
<strong>1. Revised Q4 forecast</strong> reflecting enterprise focus<br>
&nbsp;&nbsp;&nbsp;Due: Jan 24 · <span style="color: #ef4444;">⚠️ OVERDUE (3 days)</span><br>
&nbsp;&nbsp;&nbsp;Source: Pipeline Review, Jan 20<br><br>
<strong>2. Enterprise AE hiring</strong> - 2 positions<br>
&nbsp;&nbsp;&nbsp;Due: Feb 15 (first hire) · On track, 12 candidates<br>
&nbsp;&nbsp;&nbsp;Source: Pipeline Review, Jan 20<br><br>
<strong>3. Communicate TechFlow timeline change</strong><br>
&nbsp;&nbsp;&nbsp;Due: Jan 29 · Not started<br>
&nbsp;&nbsp;&nbsp;Source: Pipeline Review, Jan 27<br><br>
<strong>4. Weekly pipeline updates</strong><br>
&nbsp;&nbsp;&nbsp;Due: Every Friday · Last delivered Jan 24<br>
&nbsp;&nbsp;&nbsp;Source: Standing commitment`,
    sources: ['Pipeline Review - Jan 20', 'Pipeline Review - Jan 27', 'Email thread - Jan 22'],
  },
  nexus: {
    text: `<strong>Project Nexus Status:</strong><br><br>
<strong>Overall:</strong> Phase 2 is <strong>70% complete</strong> as of last update (Jan 24)<br><br>
<strong>Timeline:</strong><br>
• Original deadline: Feb 15<br>
• Current projection: <strong>Feb 22</strong> (7 day slip)<br>
• Reason: Vendor contract pending legal sign-off<br><br>
<strong>Budget:</strong> On track<br>
• Spent: $45,000 of $60,000 allocated<br>
• No overruns expected<br><br>
<strong>Blockers:</strong><br>
• ⚠️ Vendor contract - Legal review (Sarah escalated Jan 25)<br>
• ⚠️ Integration testing delayed until contract signed<br><br>
<strong>Recent Activity:</strong><br>
• Sarah mentioned contractor hire approved to help<br>
• Technical requirements 90% documented`,
    sources: ['Project Tracker - Jan 24', 'Eng Review - Jan 24', '1:1 with Sarah - Jan 20'],
  },
  week: {
    text: `<strong>Your Week Summary (Jan 20-26):</strong><br><br>
<strong>📅 Meetings:</strong> 24 total (18.5 hours)<br>
• 8 recurring, 6 one-on-ones, 10 ad-hoc<br><br>
<strong>✅ Decisions Made:</strong> 12<br>
• Enterprise sales pivot approved<br>
• Marketing budget increase (15%)<br>
• 2 enterprise AE hires approved<br>
• Integration contractor approved<br><br>
<strong>📋 Actions Created:</strong> 28 new items<br>
• 18 assigned to direct reports<br>
• 6 assigned to you<br>
• 4 assigned to others<br><br>
<strong>⚠️ Items Overdue:</strong> 3<br>
• Ravi's forecast (3 days)<br>
• Sarah's security questionnaire (2 days)<br>
• Tom's customer references (1 day)<br><br>
<strong>📈 Notable:</strong> Pipeline coverage improved to 1.47x`,
    sources: ['Meeting summaries', 'Action tracker', 'Calendar'],
  },
  pipeline: {
    text: `<strong>Q4 Pipeline Decisions Summary:</strong><br><br>
<strong>Jan 20 - Pipeline Review:</strong><br>
• ✅ Decided: Focus enterprise segment ($100K+ deals)<br>
• ✅ Decided: Pause SMB outbound until Q2<br>
• ✅ Decided: Hire 2 enterprise AEs<br><br>
<strong>Jan 27 - Pipeline Review:</strong><br>
• ✅ Decided: Deprioritize TechFlow (procurement delays)<br>
• ✅ Decided: Focus on Acme Corp and GlobalSys<br>
• ⚠️ <strong>Note:</strong> This conflicts with Jan 20 decision to "pursue all three deals aggressively"<br><br>
<strong>Current Pipeline Status:</strong><br>
• Total: $8.1M (vs $5.5M target)<br>
• Coverage: 1.47x<br>
• At risk: TechFlow ($450K) - likely Q1 slip`,
    sources: ['Pipeline Review - Jan 20', 'Pipeline Review - Jan 27'],
  },
  default: {
    text: `I searched across your meetings, documents, and communications but need more context. Here are some things I can help with:<br><br>
<strong>Try asking:</strong><br>
• "What needs my attention today?"<br>
• "What has [person] committed to?"<br>
• "Status on [project name]?"<br>
• "What decisions did we make about [topic]?"<br>
• "Summarize my week"<br>
• "Find documents about [topic]"<br>
• "What's the history with [company/deal]?"`,
    sources: [],
  },
}

function getResponse(text) {
  const lowerText = text.toLowerCase()
  if (lowerText.includes('attention') || lowerText.includes('today') || lowerText.includes('urgent')) {
    return responses.attention
  } else if (lowerText.includes('ravi') || lowerText.includes('commit')) {
    return responses.ravi
  } else if (lowerText.includes('nexus') || lowerText.includes('project status')) {
    return responses.nexus
  } else if (lowerText.includes('week') || lowerText.includes('summar')) {
    return responses.week
  } else if (lowerText.includes('pipeline') || lowerText.includes('decision') || lowerText.includes('q4')) {
    return responses.pipeline
  }
  return responses.default
}

export default function ChatView() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = (text) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    setMessages(prev => [...prev, { type: 'user', text: messageText }])
    setInputValue('')

    setTimeout(() => {
      const response = getResponse(messageText)
      setMessages(prev => [...prev, { type: 'assistant', text: response.text, sources: response.sources }])
    }, 800)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage()
  }

  return (
    <div className="animate-fadeIn" style={{ height: 'calc(100vh - 112px)' }}>
      <div className="chat-container" style={{ maxWidth: '900px', margin: '0 auto', height: '100%' }}>
        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="chat-empty">
              <div className="chat-empty-icon">🧠</div>
              <h3>Your Executive AI Companion</h3>
              <p>Ask me anything about your meetings, documents, commitments, or projects. I have access to your calendar, emails, Teams chats, and SharePoint documents.</p>
              <div className="chat-suggestions">
                <button className="chat-suggestion" onClick={() => sendMessage('What needs my attention today?')}>
                  What needs my attention today?
                </button>
                <button className="chat-suggestion" onClick={() => sendMessage('What has Ravi committed to this month?')}>
                  What has Ravi committed to this month?
                </button>
                <button className="chat-suggestion" onClick={() => sendMessage('Give me the status on Project Nexus')}>
                  Give me the status on Project Nexus
                </button>
                <button className="chat-suggestion" onClick={() => sendMessage('Summarize my week so far')}>
                  Summarize my week so far
                </button>
                <button className="chat-suggestion" onClick={() => sendMessage('What decisions did we make about Q4 pipeline?')}>
                  What decisions did we make about Q4 pipeline?
                </button>
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg, idx) => (
                <div key={idx} className={`message ${msg.type}`}>
                  <div className="message-bubble">
                    <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="message-sources">
                        <div className="message-sources-label">Sources:</div>
                        {msg.sources.map((s, i) => (
                          <span key={i} className="message-source">{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
        <div className="chat-input-area">
          <div className="chat-input-box">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about your meetings, docs, or projects..."
              onKeyPress={handleKeyPress}
            />
            <button className="chat-btn">🎤</button>
            <button className="chat-btn send" onClick={() => sendMessage()}>📤</button>
          </div>
        </div>
      </div>
    </div>
  )
}
