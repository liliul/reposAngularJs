import { useState } from "react"

import {PackingList} from "./components/items"
import { Game } from "./components/jogo"
import { ProductPage } from "./components/formLocal"
import Context from "./components/context"
import { ArrayMap } from "./components/array"
import { UrlViaProps } from "./components/urlViaProps"
import { TestandoProps } from "./components/props"
import { ChildrenProps } from "./components/childrenProps"
import MyProvider from "./components/useContext/MyProvider"
import { MyComponent } from "./components/useContext/MyComponent"
import RenderProvider from "./components/useContext/RenderListJson"
import { ListandoJson } from "./components/useContext/ListandoJson"
import { ContandoComReducer } from "./components/useReducer1/Reducer1"
import { ConnectedCounter } from "./components/redux"
import { InfosRedux } from './components/redux/utilizandoInfosRedux'
import FocusInput from './components/useRef/input'
import Timer from "./components/useRef/amazernarValores"
import EvitarRecriarFunction from "./components/useRef/evitarRecriarFunction"
import { useHookCounters } from "./components/hook/counters"
import { TestandoReactQuery } from "./components/reactQuery"
import { Temperature } from "./components/buttonTemperature"
import { ContextLoginComponent } from "./components/contextLogin/login"
import { CreateContextLogin } from "./context/contextLogin"
import { ContextProfileComponent } from "./components/contextLogin/profile"
import { DatasComDateFns } from "./components/datasJs"

const itemsDoArray = [
    {
        "name": "Naruto Uzumaki",
        "city": "konoha",
        "poder": "Rasingan"
    },
    {
        "name": "Som Goku",
        "city": "Vegeta",
        "poder": "Kame kame haa"
    },
    {
        "name": "Wolverine",
        "city": "Eua",
        "poder": "Adiamantio"
    }
]

function App() {
  const [isDark, setIsDark] = useState('')

  const {contar, mais, menos, limpar} = useHookCounters()

  const [contextLogin, setContextLogin] = useState()
  const [contextSenha, setContextSenha] = useState()
  const [contextProfile, setContextProfile] = useState(false)

  return (
    <>
      <h1>React js</h1>
      <PackingList />
      <br />
      
      <Game />
      <br />

      <label>
        <input
          type="checkbox"
          
          onChange={e => setIsDark(e.target.checked)}
        />
        {isDark ? 'Dark' : 'Light'} mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        
      />
      <br />
      <hr />

      <Context /> 
      
      <br />
      <hr />

      <ArrayMap props={itemsDoArray} /> 

      <br />
      <hr />

      <h1>url via props</h1>
      <UrlViaProps url="http://localhost:3333" />

      <br />
      <hr />

      <h1>testando props react js</h1>
      <TestandoProps id="akjsl92kl" name="Naruto Uzumaki" poder="Rasengan" />
      <TestandoProps id="klajh55la" name="Som Goku" poder="Tele-Transporte" />

      <br />
      <hr />

      <ChildrenProps>
        <h1>Aqui fica o conteudo do children</h1>
      </ChildrenProps>

      <br />
      <hr />
      <h2>useContext</h2>

      <MyProvider>
        <MyComponent />
      </MyProvider>

      <br />
      <hr />
      <RenderProvider>
        <ListandoJson />
      </RenderProvider>
    
      <br />
      <hr />

      <h1>useReducer</h1>
      <ContandoComReducer />

      <br />
      <hr />
      
      <h1>redux</h1>
      <ConnectedCounter />
      <h3>Reutizando redux</h3>
      <InfosRedux />

      <br />
      <hr />

      <h1>useRef</h1>
      <h2>input focos</h2>
      <FocusInput />
      
      <h2>timer</h2>
      <Timer />

      <h2>evitar recriar função</h2>
      <EvitarRecriarFunction />

      <br />
      <hr />

      <h1>Criando hooks</h1>
      <h2>Counters</h2>
      <p>Contando: {contar}</p>
      <button onClick={mais}>mais +</button>
      <button onClick={menos}>menos -</button>
      <button onClick={limpar}>limpar (**)</button>

      <br />
      <hr />

      <h1>Testando react query</h1>
      <TestandoReactQuery />

      <br />
      <hr />

      <Temperature />

      <br />
      <hr />

      <h1>Novo exemplo de uso da ContextApi do react</h1>
      <CreateContextLogin.Provider value={{
        setContextLogin,
        setContextProfile,
        contextLogin,
        contextProfile,
        setContextSenha,
        contextSenha
      }}>
        { contextProfile ? <ContextProfileComponent /> : <ContextLoginComponent /> }
      </CreateContextLogin.Provider>

      <br />
      <hr />

      <DatasComDateFns />
   </>
  )
}

export default App
