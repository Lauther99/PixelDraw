import Square from './Square';

const Board = ({ maxRows, maxColumns }) => {

    const renderSquare = ({ rowIndex, columnIndex }) => {
        const uniqueKey = rowIndex * maxColumns + columnIndex;
        return <Square key={uniqueKey} id = {uniqueKey} />;
    };

    const renderRow = (rowIndex) => {
        const row = [];
        for (let i = 0; i < maxColumns; i++) {
            row.push(renderSquare({ rowIndex, columnIndex: i }));
        }
        return row;
    };

    const renderBoard = () => {
        const board = [];
        for (let i = 0; i < maxRows; i++) {
            board.push(<div className='board-row' key={i}>{renderRow(i)}</div>);
        }
        return board;
    };

    return (
        <div className='board'>
            {renderBoard()}
        </div>
    )
}

export default Board;