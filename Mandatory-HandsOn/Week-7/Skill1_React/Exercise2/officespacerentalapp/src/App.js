import React from 'react';
import './App.css';

function App() {
  // Create an object of office to display details
  const office = {
    name: "Premium Business Center",
    rent: 75000,
    address: "123 Business District, Downtown City"
  };

  // Create a list of office objects
  const officeSpaces = [
    {
      id: 1,
      name: "Executive Office Suite",
      rent: 85000,
      address: "Tower A, Business Park, Mumbai",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Startup Hub Office",
      rent: 45000,
      address: "Tech Quarter, Bangalore",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Corporate Headquarters",
      rent: 120000,
      address: "Financial District, Delhi",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "Co-working Space",
      rent: 35000,
      address: "Innovation Center, Pune",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>

      <div className="featured-office">
        <h2>Featured Office Space</h2>
        <h3>{office.name}</h3>
        <p><strong>Address:</strong> {office.address}</p>
        <p>
          <strong>Rent:</strong> 
          <span style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
            Rs.{office.rent.toLocaleString()}
          </span>
        </p>
      </div>

      <div className="office-grid">
        <h2>Available Office Spaces</h2>
        <div className="grid">
          {officeSpaces.map((space) => (
            <div key={space.id} className="office-card">
              <img 
                src={space.image} 
                alt={space.name}
              />
              
              <h3>{space.name}</h3>
              
              <p><strong>Address:</strong> {space.address}</p>
              
              <p>
                <strong>Monthly Rent:</strong> 
                <span style={{ 
                  color: space.rent < 60000 ? 'red' : 'green',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>
                  Rs.{space.rent.toLocaleString()}
                </span>
              </p>
              
              <p style={{ color: space.rent < 60000 ? 'red' : 'green', fontStyle: 'italic' }}>
                {space.rent < 60000 ? 'Budget Friendly' : 'Premium Space'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
