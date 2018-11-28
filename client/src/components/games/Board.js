import React from 'react'
import './Board.css'

const renderCel = (makeMove, rowIndex, cellIndex, symbol, hasTurn) => {
  return (
    <label>Word</label>
    // <button
    //   className="board-tile"
    //   disabled={hasTurn}
    //   onClick={() => makeMove(rowIndex, cellIndex)}
    //   key={`${rowIndex}-${cellIndex}`}
    // >{symbol || '-'}</button>
  )
}

export default renderCel
// ({board, makeMove}) => board.map((cells, rowIndex) =>
//   <div key={rowIndex}>
//     {cells.map((symbol, cellIndex) => renderCel(makeMove, rowIndex, cellIndex,symbol,false))}
//   </div>
// )
