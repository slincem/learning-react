import { Link } from '../Link.jsx'

export default function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <img src="https://pbs.twimg.com/profile_images/543647632426807297/iIuhglfr_400x400.jpeg"
                alt="Linczz Picture" />
            <p>Hi, my name is Santiago aka Linczz, and I'm creting a React Router Clone</p>
            <Link to='/'>Go Home</Link>
        </>
    )
}