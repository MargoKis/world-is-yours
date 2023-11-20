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

| URL                                | Method           | Description                                   |
|------------------------------------|------------------|-----------------------------------------------|
| `/admin/`                          | `GET`            | Admin panel with all models                  |
| `/api/auth/`                       | `POST`           | Authorization with username & password       |
|                                    |                  |                                               |
| `/api/users/`                      | `GET`            | List users                                    |
|                                    | `POST`           | Create a new user                             |
| `/api/users/<int:user_id>/`        | `GET`            | Get details for the current user              |
|                                    | `PUT` or `PATCH` | Update details for the current user           |
|                                    | `DELETE`         | Delete the current user                       |
|                                    |                  |                                               |
| `/api/products/`                   | `GET`            | List products                                 |
|                                    | `POST`           | Create a new product                          |
| `/api/products/<int:prod_id>/`     | `GET`            | Get details for the current product           |
|                                    | `PUT` or `PATCH` | Update details for the current product        |
|                                    | `DELETE`         | Delete the current product                    |
|                                    |                  |                                               |
| `/api/products/category/`          | `GET`            | List product categories                       |
|                                    | `POST`           | Create a new product category                 |
| `/api/products/category/<int:category_id>/` | `GET`   | Get details for the current category         |
|                                    | `PUT` or `PATCH` | Update details for the current category      |
|                                    | `DELETE`         | Delete the current category                   |
|                                    |                  |                                               |
| `/api/products/reviews/`           | `GET`            | List product reviews                          |
|                                    | `POST`           | Create a new product review                   |
| `/api/products/reviews/<int:review_id>/` | `GET`     | Get details for the current review           |
|                                    | `PUT` or `PATCH` | Update details for the current review        |
|                                    | `DELETE`         | Delete the current review                     |
|                                    |                  |                                               |
| `/api/products/<int:prod_id>/specs/`| `GET`            | List product specs                            |
|                                    | `POST`           | Create a new product spec                     |
| `/api/products/specs/<int:spec_id>/`| `GET`            | Get details for the current spec              |
|                                    | `PUT` or `PATCH` | Update details for the current spec           |
|                                    | `DELETE`         | Delete the current spec                       |
|                                    |                  |                                               |
| `/api/orders/`                     | `GET`            | List orders                                   |
|                                    | `POST`           | Create a new order                            |
| `/api/orders/<int:order_id>/`       | `GET`            | Get details for the current order             |
|                                    | `DELETE`         | Delete the current order                      |
|                                    |                  |                                               |
| `/api/baskets/`                    | `GET`            | List baskets                                  |
|                                    | `POST`           | Create a new basket                           |
| `/api/baskets/<int:basket_id>/`    | `GET`            | Get details for the current basket            |
|                                    | `PUT` or `PATCH` | Update details for the current basket         |
|                                    | `DELETE`         | Delete the current basket                     |
|                                    |                  |                                               |
| `/api/wishlist/`                   | `GET`            | List wishlists                               |
|                                    | `POST`           | Create a new wishlist                        |
| `/api/wishlist/<int:wishlist_id>/` | `DELETE`         | Delete the current wishlist                  |
