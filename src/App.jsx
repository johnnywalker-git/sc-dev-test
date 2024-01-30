import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'

import Gettasks from './components/Gettasks'
import ImageContainer from './components/ImageContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center flex-col'>
     <Header />
     <Nav />
     <Gettasks />
     <ImageContainer />
    </div>
  )
}

export default App
