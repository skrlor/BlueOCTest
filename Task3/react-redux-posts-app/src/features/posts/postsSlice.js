import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Fetch posts from API
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data; 
});

// Add new post
export const addPost = createAsyncThunk('posts/addPost', async (newPost) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    return response.data;
});

// Create slice
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            });
    },
});

export default postsSlice;