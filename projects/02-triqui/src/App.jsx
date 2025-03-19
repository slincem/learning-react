import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal} from './components/WinnerModal'
import { saveGameToStorage, resetGameStorage } from './logic/storage'


function App() {
  const initialBoard = Array(9).fill(null)

  // State
  const [board, setBoard] = useState(() => JSON.parse(window.localStorage.getItem('board')) ?? initialBoard)
  const [turn, setTurn] = useState(() => window.localStorage.getItem('turn') ?? TURNS.X)
  const [winner, setWinner] = useState(null) // null = no winner, false = draw

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({board: newBoard, turn: newTurn})

    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
 

  const resetGame = () => {
    setBoard(initialBoard)  
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }


  return (
    <main className="board">
      <h1>Triqui</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square 
                key = {index}
                index = {index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected = {turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected = {turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
