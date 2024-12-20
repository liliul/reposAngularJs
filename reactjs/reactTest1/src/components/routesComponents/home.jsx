import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="bg-slate-600">
            <h2>Home Page</h2>

            <Link to="/login" className="text-blue-800">Login</Link>
        </div>
    )
}
