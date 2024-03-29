from typing import List
from sproutApp.lib.constants.action_types import ActionType

from sproutApp.lib.constants.tables import Tables
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
    
    def get_home_posts(self):
        query = f"""
            SELECT * FROM {self.table}
        """
        return self.read_all(query,None)

    def get_user_posts(self,author_id:str):
        params=[
            author_id
        ]
        query=f"""
        SELECT * FROM {self.table}
        WHERE author_id=%s
        ORDER BY create_date DESC , create_time DESC
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

    def delete_post(self,post_id:str):
        params= [post_id]
        query = f"""
        DELETE FROM {self.table}
        WHERE
        sprout_id = %s
        """
        self.delete(query,params)

    def search_posts(self,keyword):
        params = [f'%{keyword}%', f'%{keyword}%']
        query = f"""
            SELECT *
            FROM {self.table}
            WHERE
                title LIKE %s OR
                content LIKE %s
        """

        return self.read_all(query,params)
    
    def get_saved_posts(self,author_id):
        params = [author_id]
        query = f"""
        SELECT {self.table}.*
            FROM {self.table}
            INNER JOIN
                {Tables.AUTHOR_ACTIONS.value}
                ON {self.table}.sprout_id = {Tables.AUTHOR_ACTIONS.value}.sprout_id
            WHERE
                {Tables.AUTHOR_ACTIONS.value}.author_id = %s AND
                {Tables.AUTHOR_ACTIONS.value}.action_type = '{ActionType.SAVED.name}'
        """
        res= self.read_all(query,params)
        print(res)
        return res
    
    def update_sprout_post(self, post_id: int, title: str, content: str) -> None:
        pass

    def delete_sprout_post(self, post_id: int) -> None:
        pass

    def increase_like_count(self,sprout_id:str):
        params=[sprout_id]
        query= f"""
        UPDATE {self.table}
        SET likes = likes + 1
        WHERE sprout_id = %s
        """
        self.update(query,params)
    
    def decrease_like_count(self,sprout_id:str):
        params=[sprout_id]
        query= f"""
        UPDATE {self.table}
        SET likes = likes - 1
        WHERE sprout_id = %s
        """
        self.update(query,params)
    
    def increase_dislike_count(self,sprout_id:str):
        params=[sprout_id]
        query = f"""
        UPDATE {self.table}
        SET dislikes= dislikes + 1
        WHERE sprout_id = %s
        """
        self.update(query,params)

    def decrease_dislike_count(self,sprout_id:str):
        params=[sprout_id]
        query= f"""
        UPDATE {self.table}
        SET dislikes = dislikes - 1
        WHERE sprout_id = %s
        """
        self.update(query,params)