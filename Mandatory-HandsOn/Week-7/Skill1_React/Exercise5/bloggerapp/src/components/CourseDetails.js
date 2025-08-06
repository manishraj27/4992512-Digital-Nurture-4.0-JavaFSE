import React, { useState } from 'react';

const CourseDetails = ({ course, isEnrolled, completedLessons = [] }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Conditional Rendering Method 7: Using variables to store JSX
  let enrollmentButton;
  if (isEnrolled) {
    enrollmentButton = <button className="enrolled-btn" disabled>Enrolled</button>;
  } else if (course?.price === 0) {
    enrollmentButton = <button className="free-btn">Enroll for Free</button>;
  } else {
    enrollmentButton = <button className="paid-btn">Enroll for ${course?.price}</button>;
  }

  // Conditional Rendering Method 8: Using object mapping
  const difficultyStyles = {
    beginner: 'difficulty-beginner',
    intermediate: 'difficulty-intermediate',
    advanced: 'difficulty-advanced'
  };

  // Helper function for conditional rendering
  const renderProgressBar = () => {
    if (!isEnrolled || !course?.totalLessons) return null;
    
    const progressPercentage = (completedLessons.length / course.totalLessons) * 100;
    return (
      <div className="progress-container">
        <p><strong>Progress:</strong> {completedLessons.length} of {course.totalLessons} lessons completed</p>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="course-details">
      <h2>Course Details</h2>
      
      {/* Conditional Rendering Method 9: Using early return with nested conditions */}
      {!course ? (
        <p>No course selected</p>
      ) : (
        <div>
          <h3>{course.title}</h3>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          
          {/* Multiple conditional renderings using AND operator */}
          {course.difficulty && (
            <p className={difficultyStyles[course.difficulty] || ''}>
              <strong>Difficulty:</strong> {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
            </p>
          )}
          
          {course.duration && <p><strong>Duration:</strong> {course.duration} hours</p>}
          
          {/* Conditional text length with toggle */}
          {course.description && (
            <div>
              <p><strong>Description:</strong></p>
              <p>
                {showFullDescription 
                  ? course.description 
                  : `${course.description.substring(0, 100)}${course.description.length > 100 ? '...' : ''}`
                }
              </p>
              {course.description.length > 100 && (
                <button 
                  className="toggle-btn"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? 'Show Less' : 'Show More'}
                </button>
              )}
            </div>
          )}
          
          {/* Conditional rendering using multiple conditions */}
          {course.prerequisites && course.prerequisites.length > 0 && (
            <div>
              <strong>Prerequisites:</strong>
              <ul>
                {course.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Rendering chapters/modules list with conditional styling */}
          {course.modules && course.modules.length > 0 && (
            <div>
              <strong>Course Modules:</strong>
              <ul>
                {course.modules.map((module, index) => (
                  <li 
                    key={index} 
                    className={
                      isEnrolled && completedLessons.includes(index) 
                        ? 'completed-module' 
                        : 'pending-module'
                    }
                  >
                    {module}
                    {isEnrolled && completedLessons.includes(index) && ' ✓'}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Progress bar conditional rendering */}
          {renderProgressBar()}
          
          {/* Rating conditional rendering with stars */}
          {course.rating && (
            <div>
              <strong>Rating: </strong>
              <span className="rating">
                {'★'.repeat(Math.floor(course.rating))}
                {'☆'.repeat(5 - Math.floor(course.rating))}
                {' '}({course.rating}/5)
              </span>
            </div>
          )}
          
          {/* Price and enrollment button */}
          <div className="enrollment-section">
            {course.price !== undefined && (
              <p><strong>Price:</strong> {course.price === 0 ? 'Free' : `$${course.price}`}</p>
            )}
            {enrollmentButton}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
