CREATE TABLE QuipTags (
    quip_id INT,
    tag_id INT,
    PRIMARY KEY (quip_id, tag_id),
    FOREIGN KEY (quip_id) REFERENCES Quip(quip_id),
    FOREIGN KEY (tag_id) REFERENCES Tags(tag_id)
);