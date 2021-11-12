"""bar URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from rest_framework.schemas import get_schema_view
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('api/schema', get_schema_view(
        title="Dummy Project",
        description="API for all things …",
        version="1.0.0"
    ), name='openapi-schema'),
    path('api/', include('dummy.urls')),
]
