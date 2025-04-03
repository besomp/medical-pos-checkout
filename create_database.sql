-- Create Database
CREATE DATABASE IF NOT EXISTS medical_pos;

-- Use the database
USE medical_pos;

-- Create transactions table
CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    insurance VARCHAR(255),
    total DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: You can also add a sample transaction (for testing)
INSERT INTO transactions (name, dob, insurance, total) VALUES
('John Doe', '1980-05-12', 'InsuranceXYZ', 150.00),
('Jane Smith', '1992-11-30', 'InsuranceABC', 200.00);
