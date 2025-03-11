import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PostCard from "../components/PostCard";

function BlogPage() {
    const [posts, setPosts] = useState([]);
    const getPosts = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        console.log(data);
        setPosts(data);
    }

    useEffect(()=>{
        getPosts();
    }, [])

    const postCards = posts.map((post) => {
        return (
            <li key={post.id}>
                <PostCard post={post}></PostCard>
            </li>
        )
    })

    return (
        <>
            <ul className="list">
                <li><Link className="li" to='/'>Home</Link></li>
                <li><Link className="li" to='/blog'>Blog</Link></li>
            </ul>
            <h2>BlogPage</h2>
            <ul>{postCards}</ul>
        </>
    )
}

export default BlogPage;