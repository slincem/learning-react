import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

function App() {

  const users = [
    {name: "Son Goku", userName: "goku", isFollowing: true},
    {name: "Vegeta", userName: "vegeta", isFollowing: false},
    {name: "Son Gohan", userName: "gohan", isFollowing: true},
  ]

  return (
    <section className='App'>
      {
        users.map((user) => {
          const {name, userName, isFollowing} = user
          
          return (
            <TwitterFollowCard 
              key={userName}
              userName={userName} 
              initialIsFollowing={isFollowing}>
                {name}
            </TwitterFollowCard> 
          )
        })
      }
    </section>
  )
}

export default App
