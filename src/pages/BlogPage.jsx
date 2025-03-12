import { useContext, useEffect } from "react"
import PostCard from "../components/PostCard";
import HeaderComponent from "../components/HeaderComponent"
import { BlogContext } from "../contexts/blog.context";
import { UserContext } from "../contexts/user.context";

function BlogPage() {
    const {posts, error, getPosts} = useContext(BlogContext);
    const {login, logout} = useContext(UserContext);

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
            <HeaderComponent></HeaderComponent>
            <section>
                <h2>BlogPage</h2>
                <button onClick={()=> login()}>Login</button>
                <button onClick={()=> logout()}>Logout</button>

                {error ? <h2>Algo ha salido mal</h2> 
                : postCards.length 
                ? <ul>{postCards}</ul>
                : <h2>Loading</h2>
                }
            </section>
        </>
    )
}

export default BlogPage;