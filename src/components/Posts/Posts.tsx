import {useEffect, useState} from "react";

type postPropsType = {
    appName: string
}
const Posts = ({appName}: postPropsType) => {
    // Styling
    const postStyling =
        {
            margin: "50px 20px",
            backgroundColor: "lavenderblush",
            color: "black",
            padding: "20px 30px",
        }

    const [posts, setPosts] = useState<any[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));

    }, [])
    return (
        <>
            <br/>
            <br/>
            <h2> Past Posts on {appName} </h2>
            {console.log(posts)}
            {posts && posts.map((post, index) => {
                console.log(post, index);
                return (
                    <div key={`facebook-post-${index}`} style={postStyling}>
                        <h3>Post No : {index}</h3>
                        <h4>ID : {post?.id}</h4>
                        <h4>User Id : {post?.userId}</h4>
                        <h4>Title : {post?.title}</h4>
                        <h4>Post : {post?.body}</h4>
                    </div>
                )
            })}
        </>
    )
}
export default Posts;