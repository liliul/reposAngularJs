import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MyComponent from './components/Props1';
import TestandoCreateSignal from './components/CreateSignal';
import Form from './components/CreateSignal2';
import Parent from './components/Props2';

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>

      <div>
        <MyComponent name="Solid props javascript" />
      </div>

      <br />

      <div>
        <TestandoCreateSignal />
      </div>

      <br />

      <div>
        <Form />
      </div>

      <br />

      <div class="props">
        <Parent />
      </div>
    </>
  )
}

export default App
