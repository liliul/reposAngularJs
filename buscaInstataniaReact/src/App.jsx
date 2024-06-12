import { useEffect, useRef, useState } from 'react'
import './App.css'
import SearchResults from './components/SearchResults';

function App() {
  const [data, setData] = useState([]);
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef) inputRef.current.focus()
  }, [])

  const handleInputChange = (e) => {
    e.preventDefault()
    const { value } = e.target

    if (!value) {
      setData([])
      return
    }

    // const url = `http://localhost:8337/games?q=${value}`
    // const url = `https://randomuser.me/api/?results=${value}`
    const url = `http://localhost:3000`


    fetch(url)
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(setData(data))
      })

    console.log('change', e.target.value)
  }

  return (
    <>
      <div className='container'>
        <form>
          <label htmlFor="search">Game Search</label>
          <input name="search" id="search" onChange={handleInputChange} ref={inputRef} />
        </form>

        <SearchResults data={data} />
      </div>
    </>
  )
}

export default App
