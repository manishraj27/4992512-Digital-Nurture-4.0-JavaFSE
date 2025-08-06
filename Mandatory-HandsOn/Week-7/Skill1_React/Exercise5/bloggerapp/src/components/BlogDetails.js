import React from 'react';

const BlogDetails = ({ showBlog, blog, userRole }) => {
  // Conditional Rendering Method 4: Using switch statement
  const renderBlogStatus = () => {
    switch (blog?.status) {
      case 'published':
        return <span className="status published">Published</span>;
      case 'draft':
        return <span className="status draft">Draft</span>;
      case 'archived':
        return <span className="status archived">Archived</span>;
      default:
        return <span className="status unknown">Unknown Status</span>;
    }
  };

  // Conditional Rendering Method 5: Using function return
  const renderEditButton = () => {
    if (userRole === 'admin' || userRole === 'editor') {
      return <button className="edit-btn">Edit Blog</button>;
    }
    return null;
  };

  return (
    <div className="blog-details">
      <h2>Blog Details</h2>
      
      {/* Conditional Rendering Method 6: Using IIFE (Immediately Invoked Function Expression) */}
      {(() => {
        if (!showBlog) {
          return <p>Blog details are hidden</p>;
        }
        if (!blog) {
          return <p>No blog data available</p>;
        }
        return (
          <div>
            <h3>{blog.title}</h3>
            <p><strong>Author:</strong> {blog.author}</p>
            <p><strong>Category:</strong> {blog.category}</p>
            <p><strong>Published Date:</strong> {blog.publishedDate}</p>
            
            {/* Status using switch statement */}
            <p><strong>Status:</strong> {renderBlogStatus()}</p>
            
            {/* Conditional content based on multiple conditions */}
            {blog.content && blog.content.length > 0 && (
              <div>
                <h4>Content Preview:</h4>
                <p>{blog.content.substring(0, 100)}...</p>
              </div>
            )}
            
            {/* Tags using map() function with conditional rendering */}
            {blog.tags && blog.tags.length > 0 && (
              <div>
                <strong>Tags: </strong>
                {blog.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                    {index < blog.tags.length - 1 && ', '}
                  </span>
                ))}
              </div>
            )}
            
            {/* Conditional button rendering */}
            {renderEditButton()}
          </div>
        );
      })()}
    </div>
  );
};

export default BlogDetails;
