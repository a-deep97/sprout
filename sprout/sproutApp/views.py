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
            'title': request.data.get('title',''),
            'content' : request.data.get('content'),
            'author_id' : author_id,
            'draft' : request.data.get('draft',False)
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
def getProfilePosts(request):
    author_id= request.GET.get('author_id')
    data=None
    if author_id=='self':
        author_id=request.session.get('author_id')
        data = SproutUtils.get_user_posts(author_id)
    else:
        data = SproutUtils.get_user_posts(author_id)
    return Response(data)

@api_view(['GET'])
def getAuthorInfo(request):
    author_id = request.session['author_id']
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    data = AuthorUtils.get_author_info(author_id)    
    return Response(data)

@api_view(['GET'])
def getDashboardPosts(request):
    
    import pdb
    pdb.set_trace()
    author_id = request.session['author_id']
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    data = SproutUtils.get_dashboard_sprouts(author_id)
    return Response(data)

@api_view(['GET'])
def getDashboardSavedPosts(request):
    author_id = request.session['author_id']
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    data = SproutUtils.get_dashboard_saved_posts(author_id)
    return Response(data)

@api_view(['GET'])
def getSproutPostData(request):
    
    author_id=request.session.get('author_id')
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    
    data = SproutUtils.get_sprout_post_data(request.GET.get('sprout_id'),author_id)
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

@api_view(['GET','POST'])
def getPostSearchResults(request):
    author_id= request.session.get('author_id')
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    result=[]
    keyword = request.data.get('keyword')
    if not keyword:
        return Response(None)
    res = SproutUtils.search_posts(keyword)
    return Response(res)

@api_view(['POST'])
def deletePost(request):
    author_id= request.session.get('author_id')
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    post_id = request.data.get('post_id')
    res = SproutUtils.delete_post(post_id)
    if res:
        return Response({'deleted':True})
    
    return Response({'deleted': False})

@api_view(['POST'])
def savePost(request):
    author_id= request.session.get('author_id')
    if not author_id:
        return Response({'error':'Authentication failure'},status=401)
    post_id = request.data.get('postId')
    res = AuthorActionUtils.save_post(author_id,post_id)
    return Response({'saved': res})