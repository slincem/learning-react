import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('Here is the effect', { enabled })

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      console.log({ clientX, clientY })
      setMousePosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
      }}
      />
      <h3>Mouse Follower</h3>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Disable' : 'Enable'} mouse follower</button>
    </>
  )
}

export default App
