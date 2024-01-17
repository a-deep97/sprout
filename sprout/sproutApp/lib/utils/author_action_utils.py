

from datetime import datetime
import enum
from sproutApp.lib.exceptions import DuplicateDBEntryError, UnknownDBEntryError
from sproutApp.lib.utils.sprout_utils import SproutUtils

from sproutApp.DB.author_action_model import AuthorActionModel

class ActionType(enum.Enum):
    LIKE = 0
    DISLIKE = 1

class AuthorActionUtils():
    @staticmethod
    def like_sprout_post(author_id,sprout_id):
        action_date = datetime.now().strftime("%Y-%m-%d")
        action_time = datetime.now().strftime("%H:%M:%S")
        res={
            'likes_changed':0,
            'dislikes_changed':0
        }
        try:
            AuthorActionModel().create_action(author_id,sprout_id,ActionType.LIKE,action_date,action_time)
            # increase like count when like succesfull
            SproutUtils.increase_like_count(sprout_id)
            res['likes_changed']=1
            # remove the dislike action if exists and decrease dislike count
            if AuthorActionModel().actions_exists(author_id,sprout_id,ActionType.DISLIKE)[0]>0:
                AuthorActionModel().remove_action(author_id,sprout_id,ActionType.DISLIKE)
                SproutUtils.decrease_dislike_count(sprout_id)
                res['dislikes_changed']=-1
        except DuplicateDBEntryError:
            pass  
        return res
    
    def dislike_sprout_post(author_id,sprout_id):
        action_date = datetime.now().strftime("%Y-%m-%d")
        action_time = datetime.now().strftime("%H:%M:%S")
        res={
            'likes_changed':0,
            'dislikes_changed':0
        }
        try:
            AuthorActionModel().create_action(author_id,sprout_id,ActionType.DISLIKE,action_date,action_time)
            # increase dislike count when dislike succesfull
            SproutUtils.increase_dislike_count(sprout_id)
            res['dislikes_changed']=1
            # remove the dislike action if exists and decrease dislike count
            if AuthorActionModel().actions_exists(author_id,sprout_id,ActionType.LIKE)[0]>0:
                AuthorActionModel().remove_action(author_id,sprout_id,ActionType.LIKE)
                SproutUtils.decrease_like_count(sprout_id)
                res['likes_changed']=-1
        except DuplicateDBEntryError:
            pass
        return res
        