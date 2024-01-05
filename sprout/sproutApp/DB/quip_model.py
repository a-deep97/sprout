from .sprout_model import BlogModel
from .base_model import BaseModel

class QuipModel(BaseModel):
    def __init__(self) -> None:
        super().__init__()
        self.table='Quip'

    def get_quip(self, quip_id: int):
        query = f"SELECT * FROM {self.table} WHERE id = %s"
        params = [quip_id]
        return self.read(query, params)

    def get_all_quips(self):
        query = f"SELECT * FROM {self.table}"
        return self.read_all(query)

    def create_quip(self, content: str, author_id: int) -> int:
        query = f"INSERT INTO {self.table} (content, author_id) VALUES (%s, %s)"
        params = [content, author_id]
        return self.insert(query, params)

    def update_quip(self, quip_id: int, content: str) -> None:
        query = f"UPDATE {self.table} SET content = %s WHERE id = %s"
        params = [content, quip_id]
        self.update(query, params)

    def delete_quip(self, quip_id: int) -> None:
        query = f"DELETE FROM {self.table} WHERE id = %s"
        params = [quip_id]
        self.delete(query, params)