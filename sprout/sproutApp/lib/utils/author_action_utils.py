

from datetime import datetime
from sproutApp.lib.utils.common_utils import CommonUtils
from sproutApp.lib.constants.action_types import ActionType
from sproutApp.lib.exceptions import DuplicateDBEntryError

from sproutApp.DB.author_action_model import AuthorActionModel


class AuthorActionUtils():

    @staticmethod
    def get_date_time():
        action_date = datetime.now().strftime("%Y-%m-%d")
        action_time = datetime.now().strftime("%H:%M:%S")
        return action_date , action_time
    
    @staticmethod
    def like_sprout_post(author_id,sprout_id):
        action_date, action_time = AuthorActionUtils.get_date_time()
        res={
            'likes_changed':0,
            'dislikes_changed':0
        }
        try:
            AuthorActionModel().create_action(author_id,sprout_id,ActionType.LIKE,action_date,action_time)
            # increase like count when like succesfull
            CommonUtils.increase_like_count(sprout_id)
            res['likes_changed']=1
            # remove the dislike action if exists and decrease dislike count
            if AuthorActionModel().actions_exists(author_id,sprout_id,ActionType.DISLIKE):
                AuthorActionModel().remove_action(author_id,sprout_id,ActionType.DISLIKE)
                CommonUtils.decrease_dislike_count(sprout_id)
                res['dislikes_changed']=-1
        except DuplicateDBEntryError:
            pass  
        return res
    
    def dislike_sprout_post(author_id,sprout_id):
        action_date, action_time = AuthorActionUtils.get_date_time()
        res={
            'likes_changed':0,
            'dislikes_changed':0
        }
        try:
            AuthorActionModel().create_action(author_id,sprout_id,ActionType.DISLIKE,action_date,action_time)
            # increase dislike count when dislike succesfull
            CommonUtils.increase_dislike_count(sprout_id)
            res['dislikes_changed']=1
            # remove the dislike action if exists and decrease dislike count
            if AuthorActionModel().actions_exists(author_id,sprout_id,ActionType.LIKE):
                AuthorActionModel().remove_action(author_id,sprout_id,ActionType.LIKE)
                CommonUtils.decrease_like_count(sprout_id)
                res['likes_changed']=-1
        except DuplicateDBEntryError:
            pass
        return res
        
    def save_post(author_id,post_id):
        action_date, action_time = AuthorActionUtils.get_date_time()
        try:
            if AuthorActionModel().actions_exists(author_id,post_id,ActionType.SAVED):
                res = AuthorActionModel().remove_action(author_id,post_id,ActionType.SAVED) 
            else:
                res= AuthorActionModel().create_action(author_id,post_id,ActionType.SAVED,action_date,action_time)
        except Exception:
            return False
        return res
    
    def did_author_saved(author_id,post_id):
        """
        Returns if the author has saved a specific post or not
        """
        return AuthorActionModel().actions_exists(author_id,post_id,ActionType.SAVED)