import { createSignal, lazy } from 'solid-js'
import { Routes, Route, A } from "@solidjs/router";
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MyComponent from './components/Props1';
import TestandoCreateSignal from './components/CreateSignal';
import Form from './components/CreateSignal2';
import Parent from './components/Props2';

// testando router do solidjs
// import Page1 from './components/testeRouter/Page1';
const Page1 = lazy(() => import('./components/testeRouter/Page1'));


function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <Routes>
        <Route path="/page1" component={Page1} />
      </Routes>


      <div>
        <A href="/page1">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </A>
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
