

class DuplicateDBEntryError(Exception):
    def __init__(self, message="Duplicate entry"):
        self.message = message
        super().__init__(self.message)



class UnknownDBEntryError(Exception):
    def __init__(self, message="No Database entry exists"):
        self.message = message
        super().__init__(self.message)