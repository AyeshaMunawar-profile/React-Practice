type postPropsType = {
    postNo: number,
    userId: number,
    id: number,
    title: string,
    body: string
}
const PostItem = ({postNo, id, title: postTitle, body: postBody, userId}: postPropsType) => {
    // Styling
    const postStyling =
        {
            margin: "50px 20px",
            backgroundColor: "lavenderblush",
            color: "black",
            padding: "50px 30px",
            width: "90%",
            borderRadius: "3px"
        }

    return (
        <>

            <div style={postStyling}>
                <h4>Post No : {postNo}</h4>
                <h5>ID : {id}</h5>
                <h5 style={{marginBottom: "30px"}}>User Id : {userId}</h5>
                <h5 style={{color: "FireBrick"}}>Title : {postTitle}</h5>
                <h5 style={{color: "SlateGrey"}}>Post : {postBody}</h5>
            </div>

        </>
    )
}
export default PostItem;