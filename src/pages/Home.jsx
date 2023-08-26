import Board from "../components/Board"
import '../assets/styles/HomePage.css'
import React, { useState } from 'react';

export default function Home() {
    //aqui va tu logica del componente
    const [rows, setRows] = useState(10); // Valor inicial para las filas
    const [columns, setColumns] = useState(10); // Valor inicial para las columnas
    const [selectedColor, setSelectedColor] = useState('#ffffff'); // Color inicial

    const handleRowChange = (event) => {
        setRows(parseInt(event.target.value));
    };

    const handleColumnChange = (event) => {
        setColumns(parseInt(event.target.value));
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div className="home">
            <h1>Selecciona un píxel en el mapa</h1>
            <h4>Haz click en un píxel para comprarlo</h4>
            <div className="board-container">
                <div className="board-conf">
                    <h4>Configuración</h4>
                    <div className="board-conf-items">
                        <label className="conf-item">
                            Filas:
                            <input type="number" value={rows} onChange={handleRowChange} />
                        </label>
                        <label className="conf-item">
                            Columnas:
                            <input type="number" value={columns} onChange={handleColumnChange} />
                        </label>
                        <label className="conf-item">
                            Color:
                            <input type="color" value={selectedColor} onChange={handleColorChange} />
                        </label>
                    </div>
                </div>
                <Board maxRows={rows} maxColumns={columns} />
            </div>
        </div>
    )
}