from typing import List
from .base_model import BaseModel

class AuthorModel(BaseModel):
    def __init__(self) -> None:
        super().__init__()
        self.table='author'

    def initiate(self,
        author_id:str,
        firstname:str,
        lastname:str,
        secure_password:str,
        unique_salt:str,
        email:str,
        date_joined:str,
        time_joined:str,
    ):
        self.author_id=author_id
        self.secure_password=secure_password
        self.unique_salt=unique_salt
        self.firstname=firstname
        self.lastname=lastname
        self.email=email
        self.date_joined=date_joined
        self.time_joined=time_joined

    def create_user(self):
        
        params=[
                self.author_id,
                self.firstname,
                self.lastname,
                self.email,
                self.secure_password,
                self.unique_salt,
                self.date_joined,
                self.time_joined]
        query=f"""
        INSERT INTO {self.table}
        (author_id,firstname,lastname,email,secure_password,unique_salt,date_joined,time_joined)
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s)
        """
        self.insert(query=query,params=params)
    
    def login_user(self,email,password):
        
        params=[email,password]
        query=f"""
        SELECT author_id , firstname, lastname, email FROM {self.table}
        WHERE
        email = %s
        AND
        secure_password = %s
        """
        res = self.read(query,params)
        if res:
            return {
                'author_id':res[0],
                'email':res[3],
                'firstname':res[1],
                'lastname':res[2],
            }
        return None
    
    def get_unique_salt(self,email):
        
        params=[email]
        query=f"""
        SELECT unique_salt FROM {self.table}
        WHERE
        email = %s
        """
        res=self.read(query,params)
        if res:
            return res[0]
        return None
    
    def is_unique_email(self,email):
        params=[email]
        query=f"""
        SELECT count(*) from {self.table}
        WHERE email = %s
        """
        res=self.read(query,params)
        return not res[0]