import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activeComponent, setActiveComponent] = useState('book');
  const [userRole, setUserRole] = useState('user');

  // Sample data
  const sampleBook = {
    title: "The React Handbook",
    author: "John Doe",
    genre: "Programming",
    pages: 350,
    rating: 4.5,
    available: true
  };

  const sampleBlog = {
    title: "Understanding React Hooks",
    author: "Jane Smith",
    category: "Web Development",
    publishedDate: "2025-01-15",
    status: "published",
    content: "React Hooks are a powerful feature that allows you to use state and other React features without writing a class. They provide a more direct API to the React concepts you already know.",
    tags: ["React", "Hooks", "JavaScript", "Frontend"]
  };

  const sampleCourse = {
    title: "Complete React Development Course",
    instructor: "Alex Johnson",
    difficulty: "intermediate",
    duration: 40,
    description: "Master React development from basics to advanced concepts. Learn component-based architecture, state management, hooks, routing, and much more. This comprehensive course will take you from beginner to professional React developer.",
    prerequisites: ["Basic JavaScript", "HTML/CSS", "ES6 knowledge"],
    modules: [
      "Introduction to React",
      "Components and JSX",
      "State and Props",
      "Event Handling",
      "Lifecycle Methods",
      "Hooks",
      "Routing",
      "State Management"
    ],
    rating: 4.8,
    price: 99,
    totalLessons: 8
  };

  const completedLessons = [0, 1, 2]; // User has completed first 3 lessons

  // Conditional rendering for navigation buttons
  const renderNavigationButton = (componentName, label) => (
    <button 
      className={`nav-btn ${activeComponent === componentName ? 'active' : ''}`}
      onClick={() => setActiveComponent(componentName)}
    >
      {label}
    </button>
  );

  return (
    <div className="App">
      <header className="app-header">
        <h1>Blogger App - Conditional Rendering Demo</h1>
        
        {/* Role selector for demonstrating different conditional renders */}
        <div className="role-selector">
          <label>User Role: </label>
          <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        
        {/* Navigation using conditional styling */}
        <nav className="navigation">
          {renderNavigationButton('book', 'Book Details')}
          {renderNavigationButton('blog', 'Blog Details')}
          {renderNavigationButton('course', 'Course Details')}
        </nav>
      </header>

      <main className="main-content">
        {/* Conditional rendering using switch statement */}
        {(() => {
          switch(activeComponent) {
            case 'book':
              return (
                <BookDetails 
                  isVisible={true}
                  book={sampleBook}
                />
              );
            case 'blog':
              return (
                <BlogDetails 
                  showBlog={true}
                  blog={sampleBlog}
                  userRole={userRole}
                />
              );
            case 'course':
              return (
                <CourseDetails 
                  course={sampleCourse}
                  isEnrolled={userRole !== 'user'} // Enrolled if user is editor or admin
                  completedLessons={completedLessons}
                />
              );
            default:
              return <div>Select a component to view</div>;
          }
        })()}
      </main>

      <footer className="app-footer">
        <p>Current Component: <strong>{activeComponent}</strong> | User Role: <strong>{userRole}</strong></p>
        {/* Conditional footer content based on active component */}
        {activeComponent === 'book' && <p>Explore our vast collection of technical books</p>}
        {activeComponent === 'blog' && <p>Read the latest insights from industry experts</p>}
        {activeComponent === 'course' && <p>Level up your skills with our comprehensive courses</p>}
      </footer>
    </div>
  );
}

export default App;
