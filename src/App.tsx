import {useState} from 'react'

const App = () => {

  type Player = "X" | 'O';
  type Cell = Player | null;

  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState<Player>('X'); 

  const handleClick=(index:number)=>{
    if(board[index]) return;
    const newBoard= [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard)
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  return (
    <div className="h-220 w-220 border-8 border-amber-950 m-9">
      <div className="flex content-between  " >
          <button onClick={() => {handleClick(0)} }
           className="h-50 w-50 border-8 border-amber-950 m-10">
            {board[0]}
           </button>
          <button onClick={() => {handleClick(1)}}
          className="h-50 w-50 border-8 border-amber-950 m-10">
            {board[1]}
          </button>
          <button onClick={() => {handleClick(2)}}
           className="h-50 w-50 border-8 border-amber-950 m-10">
            {board[2]}
           </button>
      </div>
      <div className="flex content-between  " >
          <button onClick={() => {handleClick(3)}}
           className="h-50 w-50 border-8 border-amber-950 m-10">
            {board[3]}
           </button>
          <button onClick={() => {handleClick(4)}}
           className="h-50 w-50 border-8 border-amber-950 m-10">
            {board[4]}
           </button>
          <button onClick={() => {handleClick(5)}}
           className="h-50 w-50 border-8 border-amber-950 m-10">
            {board[5]}
           </button>
      </div>
      <div className="flex content-between  " >
          <button onClick={() => {handleClick(6)}}
           className="h-50 w-50 border-8 border-amber-950 m-10">
            {board[6]}
           </button>
          <button onClick={() => {handleClick(7)}}
           className="h-50 w-50 border-8 border-amber-950 m-10">
            {board[7]}
           </button>
          <button onClick={() => {handleClick(8)}}
           className="h-50 w-50 border-8 border-amber-950 m-10">
            {board[8]}
           </button>
      </div>
      
    </div>
  )
}

export default App
