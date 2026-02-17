import { useState, useEffect, useRef } from 'react'
import './App.css'

import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import DashboardView from './components/views/DashboardView'
import BriefView from './components/views/BriefView'
import SummaryView from './components/views/SummaryView'
import ChatView from './components/views/ChatView'
import ActionsView from './components/views/ActionsView'
import DocumentsView from './components/views/DocumentsView'
import InsightsView from './components/views/InsightsView'
import DigestView from './components/views/DigestView'
import MeetingsView from './components/views/MeetingsView'

function App() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const contentRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const showView = (viewName) => {
    setCurrentView(viewName)
    if (contentRef.current) {
      contentRef.current.scrollTop = 0
    }
  }

  const getActiveNav = () => {
    if (currentView === 'brief' || currentView === 'summary') return 'meetings'
    return currentView
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView showView={showView} />
      case 'brief':
        return <BriefView showView={showView} />
      case 'summary':
        return <SummaryView showView={showView} />
      case 'chat':
        return <ChatView />
      case 'actions':
        return <ActionsView />
      case 'documents':
        return <DocumentsView />
      case 'insights':
        return <InsightsView />
      case 'digest':
        return <DigestView />
      case 'meetings':
        return <MeetingsView showView={showView} />
      default:
        return <DashboardView showView={showView} />
    }
  }

  return (
    <div className="app">
      <Sidebar
        activeNav={getActiveNav()}
        showView={showView}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="main">
        <TopBar />
        <div className="content" ref={contentRef}>
          {renderView()}
        </div>
      </div>
    </div>
  )
}

export default App
