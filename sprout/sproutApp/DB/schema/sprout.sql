CREATE TABLE sprout (
    sprout_id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author_id VARCHAR(100) NOT NULL,
    category_id INT DEFAULT NULL,
    published BOOLEAN DEFAULT FALSE,
    create_date DATE DEFAULT(CURRENT_DATE),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    likes INT DEFAULT 0,
    dislikes INT DEFAULT 0
);