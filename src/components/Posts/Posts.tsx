import {useEffect, useState} from "react";
import PostItem from "../PostItem/PostItem";

type postPropsType = {
    appName: string
}
const Posts = ({appName}: postPropsType) => {
    const [posts, setPosts] = useState<any[]>([]);
    // componentDidMount load data only once 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));

    }, [])
    return (
        <>
            {posts && posts.length>0 ?
                <>
                    <h1 style={{margin: "80px 20px"}}> Past Posts on {appName} </h1>
                    {posts && posts.length>=1 && posts.map((post, index) => {
                        return (
                            <PostItem {...post} postNo={index} key={`facebook-post-${index}`}/>
                        )
                    })}
                </> : <h1>Loading ...</h1>}

        </>
    )
}
export default Posts;