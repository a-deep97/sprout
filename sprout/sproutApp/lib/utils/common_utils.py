

from sproutApp.DB.sprout_model import SproutModel


class CommonUtils():

    @staticmethod
    def increase_like_count(sprout_id):
        SproutModel().increase_like_count(sprout_id)

    @staticmethod
    def increase_dislike_count(sprout_id):
        SproutModel().increase_dislike_count(sprout_id)

    @staticmethod
    def decrease_like_count(sprout_id):
        SproutModel().decrease_like_count(sprout_id)
    
    @staticmethod
    def  decrease_dislike_count(sprout_id):
        SproutModel().decrease_dislike_count(sprout_id)