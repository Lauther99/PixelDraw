import './App.css'
import BgStars from './components/BgStars';
import Board from './components/Board';

function App() {
  return (
    <>
      <BgStars />
      <h1>Selecciona un píxel en el mapa</h1>
      <h4>Haz click en un píxel para comprarlo</h4>
      <Board maxRows={100} maxColumns={100}/>
    </>
  )
}

export default App
