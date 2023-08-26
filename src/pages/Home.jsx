import Board from "../components/Board"

export default function Home () {
    //aqui va tu logica del componente
    return (
        <div>
            <h1>Selecciona un píxel en el mapa</h1>
            <h4>Haz click en un píxel para comprarlo</h4>
            <Board maxRows={10} maxColumns={10}/>
        </div>
    )
}