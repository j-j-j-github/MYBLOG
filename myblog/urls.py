from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.conf import settings 
from django.conf.urls.static import static # New Import
from blog import views as blog_views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', blog_views.register, name='register'), 
    path('login/', auth_views.LoginView.as_view(template_name='blog/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='blog/logout.html'), name='logout'),
    path('', include('blog.urls')), 
    path('profile/', blog_views.profile, name='profile'),  
]



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)