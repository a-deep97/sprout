
from datetime import datetime
from sproutApp.DB.sprout_model import SproutModel
from sproutApp.lib.uid import generate_uid4


class SproutUtils():
    
    @staticmethod
    def create_sprout(**data):

        import pdb
        pdb.set_trace()
        
        create_date = datetime.now().strftime("%Y-%m-%d")
        create_time = datetime.now().strftime("%H:%M:%S")
        sprout_id = generate_uid4()
        params={
            'sprout_id' : sprout_id,
            'author_id':data.get('author_id'),
            'title': data.get('title'),
            'content' : data.get('content'),
            'draft' : data.get('draft'),
            'create_date' : create_date,
            'create_time' : create_time
        }
        sprout = SproutModel()
        sprout.initiate(**params)
        sprout.create_sprout_post()