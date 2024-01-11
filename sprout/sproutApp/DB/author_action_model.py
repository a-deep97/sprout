

from sproutApp.lib.exceptions import DuplicateDBEntryError, UnknownDBEntryError
from sproutApp.DB.base_model import BaseModel
import pymysql

class AuthorActionModel(BaseModel):
    def __init__(self) -> None:
        super().__init__()
        self.table='author_actions'
    
    def create_action(self,author_id,sprout_id, action_type,action_date,action_time):
        params=[
            author_id,
            sprout_id,
            action_type.name,
            action_date,
            action_time
        ]
        query=f"""
        INSERT INTO {self.table}
        (author_id, sprout_id, action_type, action_date, action_time)
        VALUES (%s,%s,%s,%s,%s)
        """
        try:
            self.insert(query,params)
        except Exception as e:
            if e.args[0] == 1062:
                raise DuplicateDBEntryError
            raise e

    def remove_action(self,author_id,sprout_id, action_type):
        params=[
            author_id,
            sprout_id,
            action_type.name,
        ]
        query=f"""
            DELETE FROM {self.table}
            WHERE
            author_id = %s AND 
            sprout_id = %s AND  
            action_type = %s
        """
        self.delete(query,params)

    def actions_exists(self,author_id,sprout_id,action_type):
        params=[
            author_id,
            sprout_id,
            action_type.name
        ]
        query=f"""
            SELECT COUNT(*) FROM {self.table}
            WHERE
            author_id = %s AND
            sprout_id = %s AND
            action_type = %s
        """
        return self.read(query,params)