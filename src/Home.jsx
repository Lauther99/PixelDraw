import { useEffect, useState } from 'react';
import './App.css'
import BgStars from './components/bgStars';
import Board from './components/Board';

function App() {
  const [pixels, setPixels] = useState([]);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    const storedData = localStorage.getItem('pixels');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setPixels(parsedData);
    } else {
      alert('No se encontraron datos almacenados');
    }
  }, []);

  const Pixel = ({ x, y }) => {
    const pixelAlreadyPurchased = pixels.some(pixel => pixel.x === x && pixel.y === y);

    const onClick = () => {
      if (!pixelAlreadyPurchased) {
        const newPixel = { x, y };
        setPixels(prevPixels => [...prevPixels, newPixel]);
        localStorage.setItem('pixels', JSON.stringify([...pixels, newPixel]));
        alert(`¡Pixel comprado! Coordenadas: (${x}, ${y})`);
      } else {
        alert('Oops, Ya compraste este pixel');
      }
    };

    return (
      <div
        className={`pixel ${pixelAlreadyPurchased ? 'purchased' : ''}`}
        style={{
          backgroundColor: pixelAlreadyPurchased && getRandomColor()
        }}
        data-x={x}
        data-y={y}
        onClick={onClick}
      />
    );
  };
  
  return (
    <>
      <BgStars />
      <h1>Selecciona un píxel en el mapa</h1>
      <h4>Haz click en un píxel para comprarlo</h4>
      <Board maxRows={100} maxColumns={100}/>
      
      {/* <div className="screen">
        {Array.from({ length: 20 }, (_, y) =>
          Array.from({ length: 20 }, (_, x) => (
            <Pixel key={`${x}-${y}`} x={x} y={y} />
          ))
        )}
      </div> */}
    </>
  )
}

export default App
