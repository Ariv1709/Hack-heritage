from django.urls import path
from .views import login_view, home_view, signup_view, index_view, learn_view, union_view, state_view, case_view

urlpatterns = [
    path('', login_view, name='home'),
    path('signup/', signup_view, name='signup'),
    path('login/', login_view, name='login'),
    path('home/', home_view, name='home'),
    path('index/',index_view, name='index'),
    path('learn/', learn_view, name='learn'),
    path('union/', union_view, name='union'),
    path('state/', state_view, name='state'),
    path('case/', case_view, name='case')
]
