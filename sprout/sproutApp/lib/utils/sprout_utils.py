
from datetime import datetime
from sproutApp.lib.utils.author_action_utils import AuthorActionUtils
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
        return params.get('params')

    @staticmethod
    def get_home_posts(author_id:str):
        # TODO: implement algorithm to fetch and sort relavantposts
        sprouts=[]
        res = SproutModel().get_home_posts()
        if res:
            for each in res:
                is_saved = AuthorActionUtils.did_author_saved(author_id,each[0])
                sprouts.append({
                    'sprout_id' :each[0],
                    'author_name': AuthorUtils.get_author_name_from_id(each[3]),
                    'title': each[1],
                    'content': each[2],
                    'create_date':each[6],
                    'create_time':each[7],
                    'likes':each[8],
                    'dislikes':each[9],
                    'is_saved':is_saved,
                    'is_user_author': True if author_id == each[3] else False,
                    
                })
        return sprouts
    @staticmethod
    def get_user_posts(author_id):
        sprouts =[]
        res= SproutModel().get_user_posts(author_id)
        if res:
            for each in res:
                is_saved = AuthorActionUtils.did_author_saved(author_id,each[0])
                sprouts.append({
                    'sprout_id' :each[0],
                    'author_name': AuthorUtils.get_author_name_from_id(author_id),
                    'title': each[1],
                    'content': each[2],
                    'create_date':each[6],
                    'create_time':each[7],
                    'likes':each[8],
                    'dislikes':each[9],
                    'is_saved':is_saved,
                    'is_user_author': True
                })
        return sprouts
    
    @staticmethod
    def get_dashboard_saved_posts(author_id):
        sprouts = []
        res= SproutModel().get_saved_posts(author_id)
        if res:
            for each in res:
                is_saved = AuthorActionUtils.did_author_saved(author_id,each[0])
                sprouts.append({
                    'sprout_id' :each[0],
                    'author_name': AuthorUtils.get_author_name_from_id(author_id),
                    'title': each[1],
                    'content': each[2],
                    'create_date':each[6],
                    'create_time':each[7],
                    'likes':each[8],
                    'dislikes':each[9],
                    'is_saved':is_saved,
                    'is_user_author': True if author_id == each[3] else False,
                })
        return sprouts
    
    @staticmethod 
    def get_sprout_post_data(sprout_id,author_id):
        res= SproutModel().get_sprout_post_data(sprout_id)
        sprout_data = None
        if res:
            author_name= AuthorUtils.get_author_name_from_id(res[3])
            is_saved = AuthorActionUtils.did_author_saved(res[3],sprout_id)
            sprout_data = {
                    'sprout_id' :res[0],
                    'author_name': author_name,
                    'title': res[1],
                    'content': res[2],
                    'create_date':res[6],
                    'create_time':res[7],
                    'likes':res[8],
                    'dislikes':res[9],
                    'is_saved':is_saved,
                    'is_user_author': True if author_id == res[3] else False,
            }
        return sprout_data
  
    @staticmethod
    def search_posts(keyword):
        res=SproutModel().search_posts(keyword)
        posts=[]
        if res:
            for each in res:
                is_saved = AuthorActionUtils.did_author_saved(each[3],each[0])
                posts.append(
                    {
                        'sprout_id' : each[0],
                        'content' : each[1] if each[1] else each[2]  
                    }
                )

        return posts
    
    @staticmethod
    def delete_post(post_id):
        try:
            res= SproutModel().delete_post(post_id)
            return True
        except:
            return False