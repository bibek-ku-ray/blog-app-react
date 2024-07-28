import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './conf/config';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        This is Blog app. id: {conf.appwriteProjectId}
      </h1>
      
    </div>
  )
}

export default App
