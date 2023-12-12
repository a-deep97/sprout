from typing import List
from .base_model import BaseModel

class BlogModel(BaseModel):
    def __init__(self) -> None:
        super().__init__()
        self.table='Blog'

    def get_blog_post(self, blog_id: int) -> BlogPost:
        query = f"SELECT * FROM blog_post WHERE id = %s"
        params = [blog_id]
        return self.read(query, params)

    def get_all_blog_posts(self) -> List[BlogPost]:
        query = f"SELECT * FROM {self.table}"
        return self.read_all(query)

    def create_blog_post(self, title: str, content: str, author_id: int) -> int:
        query = f"INSERT INTO {self.table} (title, content, author_id) VALUES (%s, %s, %s)"
        params = [title, content, author_id]
        return self.insert(query, params)

    def update_blog_post(self, post_id: int, title: str, content: str) -> None:
        query = f"UPDATE {self.table} SET title = %s, content = %s WHERE id = %s"
        params = [title, content, post_id]
        self.update(query, params)

    def delete_blog_post(self, post_id: int) -> None:
        query = f"DELETE FROM {self.table} WHERE id = %s"
        params = [post_id]
        self.delete(query, params)

