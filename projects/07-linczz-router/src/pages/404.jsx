import { Link } from "../Link";

export default function Page404() {
    return (
        <>
            <h1>This was not found</h1>
            <img src="https://images.unsplash.com/photo-1691085272761-eb72dc7dd3f5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Meme Dog Is Fine Burning" />
            <Link to="/">Go Home</Link>
        </>
    )
}