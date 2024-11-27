import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({ title, body}));
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input value={title} onChange={(e) => setTitle(e.target.value)} />        
            </label>
            <label>
                Body:
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
            </label>
            <button type="submit">Add Post</button>
        </form>
    );
};

export default PostForm;