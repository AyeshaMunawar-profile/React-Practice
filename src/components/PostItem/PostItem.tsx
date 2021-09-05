type postPropsType = {
    postNo: number,
    userId: number,
    id: number,
    title: string,
    body: string
}
const PostItem = ({postNo, id, title, body, userId}: postPropsType) => {
    // Styling
    const postStyling =
        {
            margin: "50px 20px",
            backgroundColor: "lavenderblush",
            color: "black",
            padding: "20px 30px",
            width: "90%"
        }

    return (
        <>

            <div key={`facebook-post-${postNo}`} style={postStyling}>
                <h3>Post No : {postNo}</h3>
                <h4>ID : {id}</h4>
                <h4>User Id : {userId}</h4>
                <h4>Title : {title}</h4>
                <h4>Post : l{body}</h4>
            </div>

        </>
    )
}
export default PostItem;