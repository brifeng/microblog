import { React } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Post = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        console.log('delete post');
        navigate('/');
    }

    return (
        <div>
            <h1>Post here</h1>
            <p>This is: {postId}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Post;