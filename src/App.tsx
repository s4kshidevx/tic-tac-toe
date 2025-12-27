import {useState} from 'react'

const App = () => {

  type Player = "X" | 'O';
  type Cell = Player | null;

  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState<Player>('X'); 

  const [winner, setWinner] = useState<Player | null>(null);

  const handleClick=(index:number)=>{
    if(board[index] || winner) return;
    const newBoard= [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard)
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  const winningCombos: number[][]=[
    [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal
  [2, 4, 6], //diagonal
  ];

  const checkWinner = (board:Cell[])=>{
    for(const combo of winningCombos){
      const [a,b,c] = combo;
      if(
        board[a] &&
        board[b] === board[c] &&
        board[a] === board[c] 
      ) return board[a]
      
    }
    return null;
  }
  

  const gameWinner = checkWinner(board);

  if(gameWinner){
    setWinner(gameWinner)
    return;
  }

  return (
    <div className="h-220 w-220 border-8 border-amber-950 m-9">
      <div className="flex content-between  " >
          <button onClick={() => {handleClick(0)} }
           className="h-50 w-50 border-8 border-amber-950 m-10 font-bold text-3xl">
            {board[0] }
           </button>
          <button onClick={() => {handleClick(1)}}
          className="h-50 w-50 border-8 border-amber-950 m-10 font-bold text-3xl">
            {board[1]}
          </button>
          <button onClick={() => {handleClick(2)}}
           className="h-50 w-50 border-8 border-amber-950 m-10 font-bold text-3xl">
            {board[2]}
           </button>
      </div>
      <div className="flex content-between  " >
          <button onClick={() => {handleClick(3)}}
           className= 'h-50 w-50 border-8 border-amber-950 m-10 font-bold text-3xl' >
            {board[3]}
           </button>
          <button onClick={() => {handleClick(4)}}
           className="h-50 w-50 border-8 border-amber-950 m-10 font-bold text-3xl">
            {board[4]}
           </button>
          <button onClick={() => {handleClick(5)}}
           className="h-50 w-50 border-8 border-amber-950 m-10 font-bold text-3xl">
            {board[5]}
           </button>
      </div>
      <div className="flex content-between  " >
          <button onClick={() => {handleClick(6)}}
           className="h-50 w-50 border-8 border-amber-950 m-10 font-bold text-3xl">
            {board[6]}
           </button>
          <button onClick={() => {handleClick(7)}}
           className="h-50 w-50 border-8 border-amber-950 m-10 font-bold text-3xl">
            {board[7]}
           </button>
          <button onClick={() => {handleClick(8)}}
           className="h-50 w-50 border-8 border-amber-950 m-10 font-bold text-3xl">
            {board[8]}
           </button>
      </div>
      
    </div>
  )
}

export default App
