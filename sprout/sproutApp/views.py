from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from sproutApp.lib.utils.sprout_utils import SproutUtils
from sproutApp.lib.utils.author_utils import AuthorUtil

@csrf_exempt  
@api_view(['GET','POST'])
def signupAuthor(request):
    if request.method == 'POST':
        data=request.data
        try:
            author=AuthorUtil.signup_author(**data)
            import pdb
            pdb.set_trace()
            return Response(author)
        except Exception as exc:
            return Response({'error': f'Could not register user {str(exc)}'}, status=500)

@api_view(['POST'])
@csrf_exempt
def loginAuthor(request):
    if request.method == 'POST':
        data = request.data
        user=AuthorUtil.login_author(**data)
        if user:
            request.session['author_id'] = user['author_id']
            request.session['email'] = user['email']
            request.session['firstname'] = user['firstname']
            request.session['lastname'] = user['lastname']
            request.session['is_authenticated'] = True
            request.session.save()
            return Response(user)
        else:
            return Response({'error': 'Invalid credentials'}, status=401)

@api_view(['POST'])
@csrf_exempt
def logoutAuthor(request):
    if request.method == 'POST':
        request.session['author_id'] = None
        request.session['email'] = None
        request.session['firstname'] = None
        request.session['lastname'] = None
        request.session['is_authenticated'] = False
        request.session.flush()
        response = Response({'message': 'Successfully logged out'})
        response.set_cookie('sessionid','')
    return Response({'error': 'Invalid request method'}, status=400)

@api_view(['POST'])
def createSprout(request):
    if request.method == 'POST':
        author_id= request.session['author_id']
        if not author_id:
            Response({'error':'Authentication failure'},status=401)
        
        data={
            'title': request.data.get('title'),
            'content' : request.data.get('content'),
            'author_id' : author_id,
            'draft' : request.data.get('draft')
        }
        sprout_id=SproutUtils.create_sprout(**data)
    return Response({'sprout_id':sprout_id})
