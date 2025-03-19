import { TURNS } from '../constants'

export  const checkWinnerFrom = (boardToCheck) => {
    const checkBoard = (boardToCheck, triquiSize = 3) => {
      let xVerticalMap = {}
      let oVerticalMap = {}
      let xHorizontalMap = {}
      let oHorizontalMap = {}
      let xMainDiagonal = 0
      let oMainDiagonal = 0
      let xAntiDiagonal = 0
      let oAntiDiagonal = 0
      
      return boardToCheck.find((value, index) => {
        const row = Math.floor(index / triquiSize)
        const col = index % triquiSize

        if(TURNS.X === value) {
          xVerticalMap[row] = (xVerticalMap[row] || 0) + 1
          xHorizontalMap[col] = (xHorizontalMap[col] || 0) + 1
          if(row === col) xMainDiagonal++
          if(row + col === triquiSize - 1) xAntiDiagonal++
        }
        if(TURNS.O === value) {
          oVerticalMap[row] = (oVerticalMap[row] || 0) + 1
          oHorizontalMap[col] = (oHorizontalMap[col] || 0) + 1
          if(row === col) oMainDiagonal++
          if(row + col === triquiSize - 1) oAntiDiagonal++
        }

        if(xVerticalMap[row] === triquiSize || xHorizontalMap[col] === triquiSize || xMainDiagonal === triquiSize || xAntiDiagonal === triquiSize) {
          return TURNS.X
        } else if(oVerticalMap[row] === triquiSize || oHorizontalMap[col] === triquiSize || oMainDiagonal === triquiSize || oAntiDiagonal === triquiSize) {
          return TURNS.O
        }
      })
    }

    return checkBoard(boardToCheck)
  }

  export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every(value => value !== null)
  }