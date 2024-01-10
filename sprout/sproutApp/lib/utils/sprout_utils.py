
from datetime import datetime
from sproutApp.DB.sprout_model import SproutModel
from sproutApp.lib.uid import generate_uid4


class SproutUtils():
    
    @staticmethod
    def create_sprout(**data):

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
    
    @staticmethod
    def get_dashboard_sprouts(author_id:str):
        
        res = SproutModel().get_dashboard_sprouts(author_id)
        sprouts=[]
        if res:
            for each in res:
                sprouts.append({
                    'sprout_id' :each[0],
                    'title': each[1],
                    'content': each[2],
                    'create_date':each[6],
                    'create_time':each[7],
                    'likes':each[8],
                    'dislikes':each[9]
                })
        return sprouts

    @staticmethod 
    def get_sprout_post_data(sprout_id):
        res= SproutModel().get_sprout_post_data(sprout_id)
        sprout_data = None
        if res:
            sprout_data = {
                    'sprout_id' :res[0],
                    'title': res[1],
                    'content': res[2],
                    'create_date':res[6],
                    'create_time':res[7],
                    'likes':res[8],
                    'dislikes':res[9]
            }
        return sprout_data