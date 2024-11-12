import {PackingList} from "./components/items"
import { Game } from "./components/jogo"
import { ProductPage } from "./components/formLocal"
import Context from "./components/context"
import { ArrayMap } from "./components/array"
import { UrlViaProps } from "./components/urlViaProps"


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
    </>
  )
}

export default App
