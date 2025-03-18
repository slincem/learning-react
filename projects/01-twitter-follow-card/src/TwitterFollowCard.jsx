import { useState } from 'react'


function TwitterFollowCard({children, userName = 'unknown', initialIsFollowing = false}) {

  const imgSrc = `https://unavatar.io/${userName}`
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const followingText = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing 
  ? 'tw-followCard-button is-following' 
  : 'tw-followCard-button'

  const handleFollowing = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={imgSrc}
          alt={`Avatar of ${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>
            @{userName}
          </span>
        </div>
      </header>
      
      <aside>
        <button className={buttonClassName} onClick={handleFollowing}>
          <span className='tw-followCard-text'>{followingText}</span>
          <span className='tw-followCard-stopFollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  )
}

  export default TwitterFollowCard