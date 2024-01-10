from typing import List
from .base_model import BaseModel

class SproutModel(BaseModel):
    def __init__(self) -> None:
        super().__init__()
        self.table='sprout'

    def initiate(
        self,
        sprout_id:str,
        author_id:str,
        title:str,
        content:str,
        draft:bool,
        create_date:str,
        create_time:str,
    ):
        self.sprout_id = sprout_id
        self.author_id=author_id
        self.title = title
        self.content = content
        self.published = not draft
        self.create_date = create_date
        self.create_time = create_time

    def get_sprout_post_data(self, sprout_id: str):
        params=[sprout_id]
        query= f"""
        SELECT * FROM {self.table}
        WHERE sprout_id = %s
        """
        data = self.read(query,params)
        return data
    def get_dashboard_sprouts(self,author_id:str):
        params=[
            author_id
        ]
        query=f"""
        SELECT * FROM {self.table}
        WHERE author_id=%s
        """
        return self.read_all(query,params)

    def create_sprout_post(self) -> int:
        params = [
            self.sprout_id,
            self.title,
            self.content,
            self.author_id,
            self.published,
            self.create_date,
            self.create_time
        ]
        query=f"""
        INSERT INTO {self.table}
        (sprout_id,title,content,author_id,published,create_date,create_time)
        VALUES (%s,%s,%s,%s,%s,%s,%s)
        """
        return self.insert(query, params)

    def update_sprout_post(self, post_id: int, title: str, content: str) -> None:
        pass

    def delete_sprout_post(self, post_id: int) -> None:
        pass

    def like_sprout_post(self,sprout_id:str):
        params=[sprout_id]
        query= f"""
        UPDATE {self.table}
        SET likes = likes + 1
        WHERE sprout_id = %s
        """
        self.update(query,params)
    
    def dislike_sprout_post(self,sprout_id:str):
        params=[sprout_id]
        query = f"""
        UPDATE {self.table}
        SET dislikes= dislikes + 1
        WHERE sprout_id = %s
        """
        self.update(query,params)
