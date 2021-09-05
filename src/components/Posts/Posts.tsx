import {useEffect, useState} from "react";
import PostItem from "../PostItem/PostItem";

type postPropsType = {
    appName: string
}
const Posts = ({appName}: postPropsType) => {
    const [posts, setPosts] = useState<any[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));

    }, [])
    return (
        <>
            <h1 style={{margin: "80px 20px"}}> Past Posts on {appName} </h1>
            {posts && posts.map((post, index) => {
                console.log(post, index);
                const {userId, id, title, body} = post;
                return (
                    <PostItem postNo={index} userId={userId} id={id} title={title} body={body}/>
                )
            })}
        </>
    )
}
export default Posts;