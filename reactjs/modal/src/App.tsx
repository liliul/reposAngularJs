import { useState } from 'react'
import { Modal} from './components/modal/modal'

import './App.css'

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <div>
        <h2>testando modal</h2>
        <button onClick={() => setOpen(!open)
        }>Modal</button>

        <Modal 
          isOpen={open} 
          setOpen={setOpen} 
          Title={'Modal com Reactjs e TSX'}
          Description={'Testando modal com react e typescript'}  
        />
      </div>
    </>
  )
}

export default App
