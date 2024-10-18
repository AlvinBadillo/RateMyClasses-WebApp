Before setting up this project, ensure you have the following installed:
- Node.js (v16 or higher recommended)
- MySQL

Backend Folders Overview
- models/: Contains the database models for users, courses, and reviews.
- controllers/: Handles the business logic for interacting with the models and processing requests.
- routes/: Defines the API endpoints for each resource (users, courses, reviews).
- db.js: Database connection setup.
- index.js: Main server entry point.

1. Clone repo
```
git clone https://github.com/yourusername/RateMyClasses.git
cd RateMyClasses/backend
```
2. Install dependencies
```
npm install
```

3. Create MySQL Db
Open your MySQL client
Run the following commands to create a database:
```
CREATE DATABASE RateMyClassesDB;
```

4. Create tables
Copy and paste each table
```
-- Users Table
CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('student', 'admin') DEFAULT 'student',
  name VARCHAR(100),
  year INT,
  major VARCHAR(100)
);

-- Courses Table
CREATE TABLE courses (
  course_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  department VARCHAR(100) NOT NULL,
  credits INT,
  description TEXT,
  average_rating DECIMAL(2, 1)
);

-- Reviews Table
CREATE TABLE reviews (
  review_id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT,
  user_id INT,
  rating DECIMAL(2, 1) NOT NULL,
  text TEXT,
  FOREIGN KEY (course_id) REFERENCES courses(course_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
```

5. Run the server
```
node index.js
```