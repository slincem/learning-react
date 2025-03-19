import {Square} from './Square'

export function WinnerModal ({ winner, resetGame })  {

    if (!winner) return null

    const winnerText = winner === false ? 'Draw' : `${winner} won's!`

    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
                <header className="win">
                {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                <button onClick={() => resetGame()}>Play again</button>
                </footer>
            </div>
        </section>
    )
}