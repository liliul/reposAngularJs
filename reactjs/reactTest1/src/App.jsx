import {PackingList} from "./components/items"
import { Game } from "./components/jogo"
import { ProductPage } from "./components/formLocal"
import Context from "./components/context"
import { ArrayMap } from "./components/array"
import { UrlViaProps } from "./components/urlViaProps"
import { TestandoProps } from "./components/props"

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

      <ArrayMap /> 

      <br />
      <hr />

      <h1>url via props</h1>
      <UrlViaProps url="http://localhost:3333" />

      <br />
      <hr />

      <h1>testando props react js</h1>
      <TestandoProps id="akjsl92kl" name="Naruto Uzumaki" poder="Rasengan" />
      <TestandoProps id="klajh55la" name="Som Goku" poder="Tele-Transporte" />
    </>
  )
}

export default App