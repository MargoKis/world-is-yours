# World Is Yours API

### Installation

Clone the repository
```
git clone https://github.com/MargoKis/world-is-yours.git
```
Install [Docker for Desktop](https://docs.docker.com/desktop/install/windows-install/)

Run docker-compose in terminal
Important! You must be in the directory with the docker files
```
docker-compose up
```

At the first startup, you need to run the command in the terminal of the django-backend container
```
python store/manage.py migrate
```

At the end  you can stop the containers with the command:
```
docker-compose down
```

API works on [localhost:8000](http://localhost:8000/)

### Endpoints that work

* admin/: The admin panel with all models 
* api/auth/: Authorization with username&password

* api/users/: List&Create users
* api/users/<int:user_id>/: GET/UPDATE/DESTROY for current user

* api/products/: List&Create products
* api/products/<int:prod_id>/: GET/UPDATE/DESTROY for current product

* api/products/category/: List&Create product categories
* api/products/category/<int:category_id>/: GET/UPDATE/DESTROY for current category

* api/products/reviews/: List&Create product reviews
* api/products/reviews/<int:review_id>/: GET/UPDATE/DESTROY for current review

* api/products/<int:prod_id>/specs/: List&Create product specs
* api/products/specs/<int:spec_id>/: GET/UPDATE/DESTROY for current specs

* api/orders/: List&Create orders
* api/orders/<int:order_id>/: GET/DESTROY for current order

* api/baskets/: List&Create baskets
* api/baskets/<int:basket_id>/: GET/UPDATE/DESTROY for current basket

* api/wishlist/: List&Create wishlists
* api/wishlist/<int:wishlist_id>/: DESTROY current wishlist


