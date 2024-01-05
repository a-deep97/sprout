import bcrypt
import uuid
from datetime import datetime

from django.conf import settings
from sproutApp.lib.uid import generate_uid5
from sproutApp.DB.author_model import AuthorModel
from email_validator import validate_email, EmailNotValidError
from django.core.mail import send_mail

class AuthorUtil():

    @staticmethod
    def signup_author(**data):
        
        if not AuthorUtil.validate_signup_email(data.get('email')):
            raise ValueError("Email address is already in use. Please choose a different one.")
        
        password=data.get('password')
        unique_salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password.encode('utf-8'),unique_salt)
        author_id = generate_uid5(data.get('email'))
        date_joined = datetime.now().strftime("%Y-%m-%d")
        time_joined = datetime.now().strftime("%H:%M:%S")
        params={
            "author_id": author_id,
            "email":data.get('email'),
            "secure_password":hashed_password.decode('utf-8'),
            "unique_salt":unique_salt.decode('utf-8'),
            "firstname":data.get('firstname'),
            "lastname":data.get('lastname'),
            "date_joined":date_joined,
            "time_joined":time_joined
        }
        author=AuthorModel()
        author.initiate(**params)
        author.create_user()
        return {
            "author_id":author_id,
            "email":params.get('email'),
            "firstname": params.get('firstname'),
            "lastname" : params.get('lastname')
        }
    
    @staticmethod
    def login_author(email,password):
        unique_salt = AuthorModel().get_unique_salt(email)
        if not unique_salt:
            raise Exception("User not found !")
        password_hash=bcrypt.hashpw(password.encode('utf-8'),unique_salt.encode('utf-8'))
        author=AuthorModel().login_user(email,password_hash.decode('utf-8'))
        return author

    @staticmethod
    def validate_signup_email(email):
        """
        validates if the email provided is unique and doesn't exists already
        """    
        if not AuthorModel().is_unique_email(email):
            return False
        return True
        
        """ TODO
        try:
            v = validate_email(email)  # verifying DNS and MX records
            return v.is_valid
        except EmailNotValidError as e:
            return False
        """
    
    @staticmethod
    def send_email(email,sub,msg):
        send_mail(
            sub,
            msg,
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False,
        )