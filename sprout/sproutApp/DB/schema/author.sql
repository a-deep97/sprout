CREATE TABLE Author (
    id INT UNIQUE PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    author_name VARCHAR(255) NOT NULL,
    bio TEXT,
    password VARCHAR(128) NOT NULL,
);
