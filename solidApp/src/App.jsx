import { createSignal, lazy } from 'solid-js'
import { Routes, Route, A, Outlet } from "@solidjs/router";
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MyComponent from './components/Props1';
import TestandoCreateSignal from './components/CreateSignal';
import Form from './components/CreateSignal2';
import Parent from './components/Props2';

import UserApi from './components/novaPage/FetchUser';

// testando router do solidjs
// import Page1 from './components/testeRouter/Page1';
const Page1 = lazy(() => import('./components/testeRouter/Page1'));


function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <Routes>
        <Route path="/page1" component={Page1} />
        <Route path="/outlet" element={<div class="props">Outlet <Outlet /></div>} />
        <Route path="/element" element={<div>Naruto Sasuke Kakashi Itachi</div>} />

        <Route path="/userapi" component={UserApi}/>
      </Routes>


      <div>
        <A href="/page1">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </A>
        <a href="/outlet">
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
      
      <br />

      <Outlet />

      <br />

      <div class="props">
        <A href="/element">Personagens de Naruto</A>
      </div>

      <br />

      <div class="props">
        <A href="/userapi">UserApi</A>
      </div>
    </>
  )
}

export default App
