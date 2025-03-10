import { Link } from "react-router-dom"

function BlogPage() {
    return (
        <>
            <h2>BlogPage</h2>
            <ul className="list">
                <li><Link className="li" to='/'>Home</Link></li>
                <li><Link className="li" to='/blog'>Blog</Link></li>
            </ul>
        </>
    )
}

export default BlogPage