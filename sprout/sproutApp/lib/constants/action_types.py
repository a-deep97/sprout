import enum


class ActionType(enum.Enum):
    LIKE = 0
    DISLIKE = 1
    SAVED = 2
    UNSAVED = 3
    OPENED = 4