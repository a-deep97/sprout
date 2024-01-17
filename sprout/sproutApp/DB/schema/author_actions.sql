CREATE TABLE author_actions (
    action_id INT PRIMARY KEY AUTO_INCREMENT,
    author_id VARCHAR(50),
    sprout_id VARCHAR(100),
    action_type VARCHAR(100) NOT NULL,
    action_date DATE NOT NULL,
    action_time TIME NOT NULL,
    UNIQUE KEY (author_id, sprout_id, action_type)
);