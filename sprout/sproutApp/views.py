from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from sproutApp.lib.utils.author_action_utils import AuthorActionUtils
from sproutApp.lib.utils.sprout_utils import SproutUtils
from sproutApp.lib.utils.author_utils import AuthorUtils
from django.contrib.auth import logout
@csrf_exempt  
@api_view(['GET','POST'])
def signupAuthor(request):
    if request.method == 'POST':
        data=request.data
        try:
            author=AuthorUtils.signup_author(**data)
            return Response(author)
        except Exception as exc:
            return Response({'error': f'Could not register user {str(exc)}'}, status=500)

@api_view(['POST'])
@csrf_exempt
def loginAuthor(request):
    if request.method == 'POST':
        data = request.data
        user=AuthorUtils.login_author(**data)
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
        logout(request)
        """
        request.session['author_id'] = None
        request.session['email'] = None
        request.session['firstname'] = None
        request.session['lastname'] = None
        request.session['is_authenticated'] = False
        request.session.flush()
        response = Response({'message': 'Successfully logged out'})
        """
        response = Response({'message': 'Successfully logged out'})
        response.delete_cookie('sessionid')
        return response
    return Response({'error': 'Invalid request method'}, status=400)

@api_view(['GET'])
def checkAuthentication(request):
    author_id=request.session.get('author_id')
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    return Response({'info':'User is authenticated'},status=201)

@api_view(['POST'])
def createSprout(request):
    if request.method == 'POST':
        author_id= request.session['author_id']
        if not author_id:
            return Response({'error':'Authentication failure'},status=401)
        
        data={
            'title': request.data.get('title'),
            'content' : request.data.get('content'),
            'author_id' : author_id,
            'draft' : request.data.get('draft')
        }
        sprout_id=SproutUtils.create_sprout(**data)
    return Response({'sprout_id':sprout_id})

@api_view(['GET'])
def getHomePosts(request):
    author_id= request.session.get('author_id')
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    data = SproutUtils.get_home_posts(author_id)
    return Response(data)

@api_view(['GET'])
def getDashboardPosts(request):
    
    author_id = request.session['author_id']
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    data = SproutUtils.get_dashboard_sprouts(author_id)
    return Response(data)

@api_view(['GET'])
def getSproutPostData(request):
    
    author_id=request.session.get('author_id')
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    
    data = SproutUtils.get_sprout_post_data(request.GET.get('sprout_id'))
    return Response(data)

@api_view(['GET'])
def likeSproutPost(request):
    author_id= request.session.get('author_id')
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    res=AuthorActionUtils.like_sprout_post(author_id,request.GET.get('sprout_id'))
    return Response(res)

@api_view(['GET'])
def dislikeSproutPost(request):
    author_id= request.session.get('author_id')
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    res=AuthorActionUtils.dislike_sprout_post(author_id,request.GET.get('sprout_id'))
    return Response(res)