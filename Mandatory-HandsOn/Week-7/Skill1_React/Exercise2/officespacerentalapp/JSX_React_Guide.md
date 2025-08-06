# Office Space Rental App - JSX & React Concepts Guide

## 📋 Objectives Covered

### 1. **Define JSX**
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React code more readable and easier to write.

**Key Features of JSX:**
- Combines JavaScript and HTML-like syntax
- Transpiles to `React.createElement()` calls
- Must return a single parent element
- Uses camelCase for HTML attributes (className instead of class)
- Allows embedding JavaScript expressions with `{}`

### 2. **ECMA Script (ES6+)**
ECMAScript is the standard upon which JavaScript is based. ES6+ features used in our app:
- `const` and `let` declarations
- Arrow functions
- Template literals
- Destructuring
- Array methods (map, filter)
- Import/Export modules

### 3. **React.createElement()**
JSX is syntactic sugar for `React.createElement()`. Our JSX:
```jsx
<h1>Office Space Rental App</h1>
```
Compiles to:
```javascript
React.createElement('h1', null, 'Office Space Rental App')
```

### 4. **Creating React Nodes with JSX**
React nodes are created using JSX syntax:
```jsx
// Element nodes
const heading = <h1>Title</h1>;

// Component nodes
const component = <MyComponent prop="value" />;

// Fragment nodes
const fragment = <><div>Item 1</div><div>Item 2</div></>;
```

### 5. **Rendering JSX to DOM**
JSX renders to the DOM through:
1. **Virtual DOM**: React creates a virtual representation
2. **Reconciliation**: React compares virtual DOM with actual DOM
3. **DOM Updates**: Only changed elements are updated

### 6. **JavaScript Expressions in JSX**
Use `{}` to embed JavaScript expressions:
```jsx
const name = "Office";
const element = <h1>Welcome to {name} App</h1>;

// Conditional expressions
const rent = 50000;
const color = rent < 60000 ? 'red' : 'green';

// Function calls
const formatted = <span>{rent.toLocaleString()}</span>;
```

### 7. **Inline CSS in JSX**
CSS styles are applied using the `style` attribute with objects:
```jsx
const styles = {
  color: 'red',
  fontSize: '16px',
  backgroundColor: 'lightgray'
};

const element = <div style={styles}>Styled content</div>;

// Or inline
const inline = <div style={{color: 'blue', margin: '10px'}}>Content</div>;
```

---

## 🏢 Office Space Rental App Implementation

### **Features Implemented:**

#### 1. **Heading Element (JSX)**
```jsx
<h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
  🏢 Office Space Rental App
</h1>
```

#### 2. **Image Attributes (JSX)**
```jsx
<img 
  src={space.image} 
  alt={space.name}
  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
/>
```

#### 3. **Office Object**
```javascript
const office = {
  name: "Premium Business Center",
  rent: 75000,
  address: "123 Business District, Downtown City"
};
```

#### 4. **List of Office Objects**
```javascript
const officeSpaces = [
  {
    id: 1,
    name: "Executive Office Suite",
    rent: 85000,
    address: "Tower A, Business Park, Mumbai",
    image: "https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Executive+Suite"
  },
  // ... more offices
];
```

#### 5. **Looping Through Data**
```jsx
{officeSpaces.map((space) => (
  <div key={space.id}>
    <h3>{space.name}</h3>
    <p>{space.address}</p>
    <span style={{ color: space.rent < 60000 ? 'red' : 'green' }}>
      ₹{space.rent.toLocaleString()}
    </span>
  </div>
))}
```

#### 6. **Conditional CSS Styling**
```jsx
// Function for rent color
const getRentColor = (rent) => {
  return rent < 60000 ? 'red' : 'green';
};

// Applied in JSX
<span style={{ 
  color: space.rent < 60000 ? 'red' : 'green',
  fontWeight: 'bold',
  fontSize: '20px'
}}>
  ₹{space.rent.toLocaleString()}
</span>
```

---

## 🎯 Key JSX Rules Demonstrated

### 1. **Single Parent Element**
```jsx
return (
  <div className="App">
    {/* All content wrapped in single parent */}
  </div>
);
```

### 2. **Self-Closing Tags**
```jsx
<img src="image.jpg" alt="description" />
<br />
<hr />
```

### 3. **camelCase Attributes**
```jsx
<div className="container" onClick={handleClick} tabIndex="0">
```

### 4. **JavaScript Expressions**
```jsx
<h3>{office.name}</h3>
<span>{office.rent.toLocaleString()}</span>
<div style={{display: 'flex'}}></div>
```

### 5. **Conditional Rendering**
```jsx
{space.rent < 60000 ? '💰 Budget Friendly' : '⭐ Premium Space'}
```

---

## 🚀 Running the Application

```bash
# Navigate to the officespacerentalapp directory
cd officespacerentalapp

# Install dependencies (if not already installed)
npm install

# Start the development server
npm start

# Build for production
npm run build
```

The app will run on `http://localhost:3000` and display:

1. **Main heading** created with JSX
2. **Featured office** showing single object data
3. **Office grid** displaying list of offices with images
4. **Conditional rent colors**:
   - **Red**: Rent below ₹60,000
   - **Green**: Rent above ₹60,000
5. **Dynamic content** using JavaScript expressions

---

## 📚 Learning Outcomes

After completing this exercise, you will understand:

1. **JSX Syntax**: How to write HTML-like code in JavaScript
2. **React Elements**: Creating and rendering React nodes
3. **JavaScript Integration**: Embedding expressions in JSX
4. **Inline Styling**: Applying CSS styles using JavaScript objects
5. **Dynamic Content**: Rendering data-driven components
6. **List Rendering**: Using map() to display arrays of data
7. **Conditional Logic**: Applying different styles based on conditions
8. **Component Structure**: Organizing JSX for maintainable code

This office space rental app serves as a comprehensive demonstration of JSX fundamentals and React rendering concepts in a practical, real-world context.
