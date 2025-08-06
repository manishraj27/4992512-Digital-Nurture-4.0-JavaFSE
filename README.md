# Cognizant Digital Nurture 4.0 - Java Full Stack Engineer

This repository contains the mandatory hands-on exercises for the Cognizant Digital Nurture 4.0 Java Full Stack Engineer program, spanning 7 weeks with comprehensive coverage of modern software development technologies and practices.

## 📚 Course Overview

The program covers a wide range of technologies and skills essential for modern Java full-stack development:

- **Design Patterns & Data Structures** (Week 1)
- **Database Programming & Testing** (Week 2)
- **Spring Framework & JPA** (Week 3)
- **RESTful Web Services** (Week 4)
- **Microservices Architecture** (Week 5)
- **Frontend Development with React** (Weeks 6-7)

## 🗂️ Repository Structure

```
Mandatory-HandsOn/
├── Week-1/                 # Fundamentals
├── Week-2/                 # Database & Testing
├── Week-3/                 # Spring Framework
├── Week-4/                 # REST APIs
├── Week-5/                 # Microservices
├── Week-6/                 # React Basics
└── Week-7/                 # Advanced React
```

---

## 📋 Weekly Breakdown

### 🔥 Week 1: Core Java Fundamentals
**Focus**: Design Principles, Patterns & Data Structures

#### Skill 1: Design Principles & Patterns
- **Exercise 1**: Implementing the Singleton Pattern
  - `SingletonPatternExample/` - Thread-safe singleton implementation
- **Exercise 2**: Implementing the Factory Method Pattern
  - `FactoryMethodPatternExample/` - Factory pattern for object creation

#### Skill 2: Data Structures and Algorithms
- **Exercise 2**: E-Commerce Platform Search Function
  - `Exercise2_ E_Commerce_Platform_Search_Function/` - Search algorithms implementation
- **Exercise 7**: Financial Forecasting
  - `Exercise7_ Financial_Forecasting/` - Recursive algorithms for financial calculations

---

### 🗃️ Week 2: Database Programming & Testing
**Focus**: PL/SQL, Unit Testing & Logging

#### Skill 1: PL/SQL Programming
- **Exercise 1**: Control Structures
  - Database table creation and data manipulation
  - Conditional logic implementation
  - Customer management scenarios
- **Exercise 3**: Stored Procedures
  - `proc_process_monthly_interest` - Monthly interest calculation
  - `proc_update_employee_bonus` - Employee bonus management
  - `proc_transfer_funds` - Secure fund transfer operations

#### Skill 2: TDD using JUnit5 and Mockito
- **JUnit Basic Testing Exercises**
  - Exercise 1, 3, 4 - Fundamental unit testing concepts
- **Mockito Exercises**
  - Exercise 1, 2 - Mock object creation and testing

#### Skill 3: SLF4J Logging Framework
- **Exercise 1**: LoggingExample-Demo
  - Comprehensive logging implementation
  - Different log levels and configurations

---

### 🌱 Week 3: Spring Framework & Persistence
**Focus**: Spring Core, Maven & Data JPA

#### Skill 1: Spring Core and Maven
- **Exercise 1, 2, 4**: Library Management System
  - Dependency injection configurations
  - Bean management
  - Maven project structure

#### Skill 2: Spring Data JPA, Spring Boot & Hibernate
- **Exercise 1**: ORM Learning (`orm-learn/`)
  - Entity mapping and relationships
- **Exercise 4**: Employee Management (`employee-management/`)
  - Complete CRUD operations with JPA

---

### 🌐 Week 4: RESTful Web Services
**Focus**: Spring REST using Spring Boot 3

#### Spring REST HandsOn
- **Exercise 1**: Spring Web Project Using Maven
- **Exercise 2**: Spring Core SDF From SConfigXML
- **Exercise 3**: HelloWorld RESTful Web Service
- **Exercise 4**: REST Country Web Service
- **Exercise 5**: REST getCountryBased countryCode

#### JWT HandsOn
- Security implementation with JSON Web Tokens
- Authentication and authorization mechanisms

---

### ☁️ Week 5: Microservices Architecture
**Focus**: Microservices with Spring Boot 3 & Spring Cloud

#### Microservices with API Gateway
- Service discovery and registration
- API Gateway implementation
- Inter-service communication
- Load balancing and routing

---

### ⚛️ Week 6: React Fundamentals
**Focus**: Frontend Development with React

- **Exercise 1**: My First React (`myfirstreact/`)
  - Basic React component creation
- **Exercise 2**: Student App (`StudentApp/`)
  - State management and props
- **Exercise 3**: Score Calculator App (`scorecalculatorapp/`)
  - Event handling and calculations
- **Exercise 4**: Blog App (`blogapp/`)
  - Complex component interactions
- **Exercise 5**: Cohorts Tracker (`cohortstracker/`)
  - Advanced state management

---

### 🚀 Week 7: Advanced React
**Focus**: Advanced React Concepts & Real-world Applications

- **Exercise 1**: Cricket App (`cricketapp/`)
  - Sports data management
- **Exercise 2**: Office Space Rental App (`officespacerentalapp/`)
  - Business application development
- **Exercise 3**: Event Examples App (`eventexamplesapp/`)
  - Advanced event handling
- **Exercise 4**: Ticket Booking App (`ticketbookingapp/`)
  - Complex business logic implementation
- **Exercise 5**: Blogger App (`bloggerapp/`)
  - Full-featured content management

---

## 🛠️ Technologies Used

### Backend Technologies
- **Java 17+**
- **Spring Framework 6**
- **Spring Boot 3**
- **Spring Data JPA**
- **Spring Security**
- **Spring Cloud**
- **Hibernate ORM**
- **Oracle Database / PL-SQL**
- **Maven**
- **JUnit 5**
- **Mockito**
- **SLF4J**

### Frontend Technologies
- **React 18+**
- **JavaScript ES6+**
- **HTML5 & CSS3**
- **Node.js & npm**

### Development Tools
- **IDE**: Visual Studio Code / IntelliJ IDEA
- **Version Control**: Git
- **API Testing**: Postman
- **Database**: Oracle SQL Developer

---

## 🚀 Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 16+ and npm
- Oracle Database (for PL/SQL exercises)
- Maven 3.6+
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/manishraj27/4992512-Digital-Nurture-4.0-JavaFSE.git
   cd 4992512-Digital-Nurture-4.0-JavaFSE
   ```

2. **For Java/Spring Projects**
   ```bash
   cd [project-directory]
   mvn clean install
   mvn spring-boot:run
   ```

3. **For React Projects**
   ```bash
   cd [react-project-directory]
   npm install
   npm start
   ```

4. **For Database Exercises**
   - Ensure Oracle Database is running
   - Execute SQL scripts in the provided order
   - Check output folders for expected results

---

## 📁 Project Structure

Each exercise follows a consistent structure:
```
Exercise_Name/
├── src/                    # Source code
├── Output/                 # Screenshots and results
├── README.md              # Exercise-specific documentation
├── pom.xml                # Maven configuration (for Java projects)
└── package.json           # npm configuration (for React projects)
```

---

## 🎯 Learning Objectives

By completing these exercises, you will gain proficiency in:

1. **Object-Oriented Design** - Design patterns and SOLID principles
2. **Data Structures & Algorithms** - Efficient problem-solving techniques
3. **Database Programming** - Advanced PL/SQL and ORM concepts
4. **Testing Methodologies** - TDD with JUnit and Mockito
5. **Spring Ecosystem** - Comprehensive framework knowledge
6. **RESTful API Development** - Modern web service creation
7. **Microservices Architecture** - Scalable system design
8. **Frontend Development** - Modern React application development
9. **Full-Stack Integration** - End-to-end application development

---

## 📊 Progress Tracking

- [x] Week 1: Design Patterns & Data Structures
- [x] Week 2: Database Programming & Testing
- [x] Week 3: Spring Framework & JPA
- [x] Week 4: RESTful Web Services
- [x] Week 5: Microservices Architecture
- [x] Week 6: React Fundamentals
- [x] Week 7: Advanced React



---

## 👨‍💻 Author

**Manish Raj**
- GitHub: [@manishraj27](https://github.com/manishraj27)
- Repository: [4992512-Digital-Nurture-4.0-JavaFSE](https://github.com/manishraj27/4992512-Digital-Nurture-4.0-JavaFSE)

---

## 📜 License

This project is part of the Cognizant Digital Nurture 4.0 program and is intended for educational purposes.

---

*Last Updated: August 2025*