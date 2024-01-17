
from datetime import datetime
from sproutApp.DB.sprout_model import SproutModel
from sproutApp.lib.uid import generate_uid4
from sproutApp.lib.utils.author_utils import AuthorUtils

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
    def get_home_posts(author_id:str):
        # TODO: implement algorithm to fetch and sort relavantposts
        sprouts=[]
        res = SproutModel().get_posts(author_id)
        if res:
            for each in res:
                sprouts.append({
                    'sprout_id' :each[0],
                    'author_name': AuthorUtils.get_author_name_from_id(author_id),
                    'title': each[1],
                    'content': each[2],
                    'create_date':each[6],
                    'create_time':each[7],
                    'likes':each[8],
                    'dislikes':each[9]
                })
        return sprouts
    @staticmethod
    def get_user_posts(author_id):
        sprouts =[]
        res= SproutModel().get_posts(author_id)
        if res:
            for each in res:
                sprouts.append({
                    'sprout_id' :each[0],
                    'author_name': AuthorUtils.get_author_name_from_id(author_id),
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
            author_name= AuthorUtils.get_author_name_from_id(res[3])
            sprout_data = {
                    'sprout_id' :res[0],
                    'author_name': author_name,
                    'title': res[1],
                    'content': res[2],
                    'create_date':res[6],
                    'create_time':res[7],
                    'likes':res[8],
                    'dislikes':res[9]
            }
        return sprout_data

    @staticmethod
    def increase_like_count(sprout_id):
        SproutModel().increase_like_count(sprout_id) 

    @staticmethod 
    def decrease_like_count(sprout_id):
        SproutModel().decrease_like_count(sprout_id)

    @staticmethod
    def increase_dislike_count(sprout_id):
        SproutModel().increase_dislike_count(sprout_id) 
    
    @staticmethod
    def decrease_dislike_count(sprout_id):
        SproutModel().decrease_dislike_count(sprout_id)