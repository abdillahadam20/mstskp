import { useState } from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Header />
    </div>
  )
}

export default App
