import React from "react";

class Posts extends React.Component{
    constructor(props){
        super(props);
        // Initialize component with a list of Posts in state
        this.state = {
            posts: [],
            hasError: false
        };
    }
    
    loadPosts() {
        // Use Fetch API to get posts from JSONPlaceholder API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                this.setState({ hasError: true });
            });
    }
    
    componentDidMount() {
        // Make call to loadPosts() to fetch the posts when component mounts
        this.loadPosts();
    }
    
    render() {
        const { posts, hasError } = this.state;
        
        if (hasError) {
            return <div>Something went wrong while loading posts.</div>;
        }
        
        return (
            <div style={{ padding: '20px' }}>
                <h1>Blog Posts</h1>
                {posts.length === 0 ? (
                    <p>Loading posts...</p>
                ) : (
                    posts.map(post => (
                        <div key={post.id} style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))
                )}
            </div>
        );
    }
    
    componentDidCatch(error, info) {
        // Display error as alert message
        alert(`An error occurred in Posts component: ${error.message}`);
        console.error('Posts component error:', error, info);
        this.setState({ hasError: true });
    }
}

export default Posts;
