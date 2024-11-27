<## State Management with Redux>
The app uses Redux to manage the global state. It has a slice named postsSlice.js, which handles the following actions:
<- Fetching Posts: The fetchPosts async thunk fetches the posts from the API.
- Managing State: The state is structured with posts, status, and error.
>

<## Components>
<- PostList.js: This component displays the fetched posts. It uses useSelector to retrieve the posts from Redux state and maps over the posts array to display each post's title and body.
- PostForm.js: This component allows users to submit new posts. It has a simple form with fields for the title and body of the post. Upon submission, the post is added to the list.
- store.js: Configures the Redux store and combines the reducers. It uses configureStore from Redux Toolkit to initialize the state and register reducers.
>

<## Fetching Data from the API>
Using Redux Thunks, the app fetches data from https://jsonplaceholder.typicode.com/posts as soon as the PostList component mounts. The fetched posts are then stored in Redux state and displayed.

Since I am very new to React and Redux, I approached the problem by researching, studying documentation, and seeking guidance.
Although I had help with some parts of the implementation, I had gained a clearer understanding of concepts like Redux state management and creating components in React.