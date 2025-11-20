import { useState } from 'react'

import './App.css'
import { Dashboard } from './components/Dashboard'
import { AppLayout } from './components/layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppLayout>
      <Dashboard />
    </AppLayout>
    </>
  )
}

export default App
