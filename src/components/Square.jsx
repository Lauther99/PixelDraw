import { useState } from 'react';


const Square = ({ children, id, colorSq }) => {
    const [purchased, setPurchased] = useState(false);
    const [squareStyle, setSquareStyle] = useState({
        backgroundColor: '',
    });

    const handleSquareClick = () => {
        if (purchased){
            setPurchased(false)
            setSquareStyle({
                backgroundColor: '',
            });
            return
        }

        setPurchased(true)
        setSquareStyle({
            backgroundColor: colorSq,
        });
    };

    return (
        <div className={`pixel ${purchased ? 'purchased' : 'no-purchased'}`} style={squareStyle} onClick={handleSquareClick}> {children}</div>
    );
};


export default Square;