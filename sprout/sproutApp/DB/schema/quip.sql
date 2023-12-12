-- Create a table for quips
CREATE TABLE Quip (
    quip_id INT PRIMARY KEY,
    content TEXT NOT NULL,
    author INT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id INT,
    published BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

