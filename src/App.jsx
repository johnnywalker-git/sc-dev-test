import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/nav'
import Gettasks from './components/Gettasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center flex-col'>
     <Header />
     <Nav />
     <Gettasks />
    </div>
  )
}

export default App
