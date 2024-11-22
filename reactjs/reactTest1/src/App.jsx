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
// import RenderProvider from "./components/useContext/RenderizandoJson"
import RenderProvider from "./components/useContext/RenderListJson"
// import { ListandoJson } from "./components/useContext/ListandoJson"
import { ListandoJson } from "./components/useContext/ListandoJson"
import { ContandoComReducer } from "./components/useReducer1/Reducer1"
import { ConnectedCounter } from "./components/redux"


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
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        
      />
      <br />

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
    </>
  )
}

export default App
