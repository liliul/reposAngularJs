import { createSignal, lazy } from 'solid-js'
import { Routes, Route, A, Outlet } from "@solidjs/router";
import { MetaProvider, Title } from '@solidjs/meta';
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MainComponents from './Main';
import Mycount from './components/CreateSignal4';

const UserApi = lazy(() => import('./components/fetchApiSolidjs/FetchUser'));
const Page1 = lazy(() => import('./components/testeRouter/Page1'));


function App() {
  const [count, setCount] = createSignal(0)

  function counterFunc() {
    setCount(count() + 1)
  }

  return (
    <>
      <MetaProvider>

        <Title>Home App</Title>

      </MetaProvider>

      <Routes>
        <Route path="/" element={<h3>Home App</h3>} />
        <Route path="/page1" component={Page1} />
        <Route path="/outlet" element={<div class="props">Outlet <Mycount /></div>} />
        <Route path="/element" element={<div>Naruto Sasuke Kakashi Itachi</div>} />

        <Route path="/userapi" component={UserApi} />
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
        <button onClick={counterFunc}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
      
      <MainComponents />

    </>
  )
}

export default App
