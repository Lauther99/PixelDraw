import { useState } from 'react';


const Square = ({ children, id }) => {
    const [purchased, setPurchased] = useState(false);
    const handleSquareClick = () => {
        setPurchased(true)
        console.log(id);
    };

    return (
        <div className={`pixel ${purchased ? 'purchased' : 'no-purchased'}`} onClick={handleSquareClick}> {children}</div>
    );
};


export default Square;