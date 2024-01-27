CREATE TABLE author (
    author_id VARCHAR(50) PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    secure_password VARCHAR(255) NOT NULL,
    bio VARCHAR(30) DEFAULT 'Hi there !'
    unique_salt VARCHAR(50) NOT NULL,
    date_joined DATE NOT NULL,
    time_joined TIME NOT NULL,
    last_login_date DATE,
    last_login_time TIME,
    is_active BOOLEAN NOT NULL DEFAULT true,
    profile_picture_url VARCHAR(255) DEFAULT NULL,
    twitter VARCHAR(100) DEFAULT NULL,
    linkedIn VARCHAR(100) DEFAULT NULL,
    facebook VARCHAR(100) DEFAULT NULL,
    website VARCHAR(100) DEFAULT NULL
);