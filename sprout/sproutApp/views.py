
from rest_framework.decorators import api_view

@api_view(['GET'])
def dummyView(request):
    print("hello world")