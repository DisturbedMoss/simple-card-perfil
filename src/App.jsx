import { useState } from 'react'
import { CardPerfil } from './components/CardPerfil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#2C3E50]'>
      <CardPerfil/>
    </div>
  )
}

export default App
