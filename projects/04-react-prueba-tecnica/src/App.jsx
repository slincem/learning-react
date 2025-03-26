import './App.css'
import { useCatImage } from './hooks/UseCatImage'
import { useCatFact } from './hooks/UseCatFact'

function App() {

  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClickNewFact = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClickNewFact}>Get New Fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first words for: ${fact}`}></img>}
    </main>
  )
}

export default App
