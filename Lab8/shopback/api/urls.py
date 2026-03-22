# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.index),
#     path('about', views.about)
# ]

from django.urls import path
from . import views

urlpatterns = [
    # path('', views.index),
    path('api/products/', views.product_list),
    path('api/products/<int:id>/', views.product_detail),
    path('api/categories/', views.category_list),
    path('api/categories/<int:id>/', views.category_detail),
    path('api/categories/<int:id>/products/', views.category_products),
]