
import uuid


def generate_uid5(email):
    unique_id = uuid.uuid5(uuid.NAMESPACE_DNS,email)
    return str(unique_id)

def generate_uid4():
    unique_id = uuid.uuid4()
    return str(unique_id)