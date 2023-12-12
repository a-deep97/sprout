CREATE TABLE QuipTags (
    blog_id INT,
    tag_id INT,
    PRIMARY KEY (blog_id, tag_id),
    FOREIGN KEY (blog_id) REFERENCES Blog(blog_id),
    FOREIGN KEY (tag_id) REFERENCES Tags(tag_id)
);