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

# API Documentation

## 1. Admin Panel
- **Endpoint:** `/admin/`
- **Method:** `GET`
- **Description:** Access the admin panel with all models.

## 2. Authorization
- **Endpoint:** `/api/auth/`
- **Method:** `POST`
- **Description:** Authorization with username and password. Accepts username and password, returns a token.

## 3. Users
### 3.1 List Users
- **Endpoint:** `/api/users/`
- **Method:** `GET`
- **Description:** List all users.
- **Protection:** IsAuthenticated

### 3.2 Create User
- **Endpoint:** `/api/users/`
- **Method:** `POST`
- **Description:** Create a new user.
- **Protection:** None (No authentication required for creating a user)
- **Parameters:**
  - username (string)
  - email (string)
  - password (string)
  - confirm_password (string)

### 3.3 Get, Update, Destroy User
- **Endpoint:** `/api/users/<int:user_id>/`
- **Method:** `GET` (Get), `PUT` or `PATCH` (Update), `DELETE` (Destroy)
- **Description:** Get, update, or delete information for the specified user.
- **Protection:** IsAuthenticated, IsOwnerOrReadOnly

## 4. Products
### 4.1 List Products
- **Endpoint:** `/api/products/`
- **Method:** `GET`
- **Description:** List all products.
- **Protection:** IsAdminUser

### 4.2 Create Product
- **Endpoint:** `/api/products/`
- **Method:** `POST`
- **Description:** Create a new product.
- **Protection:** IsAdminUser
- **Parameters:**
  - name (string)
  - price (decimal)
  - description (string)
  - category (integer)

### 4.3 Get, Update, Destroy Product
- **Endpoint:** `/api/products/<int:prod_id>/`
- **Method:** `GET` (Get), `PUT` or `PATCH` (Update), `DELETE` (Destroy)
- **Description:** Get, update, or delete information for the specified product.
- **Protection:** IsAdminUser

## 5. Product Categories
### 5.1 List Categories
- **Endpoint:** `/api/products/category/`
- **Method:** `GET`
- **Description:** List all product categories.
- **Protection:** IsAdminUser

### 5.2 Create Category
- **Endpoint:** `/api/products/category/`
- **Method:** `POST`
- **Description:** Create a new product category.
- **Protection:** IsAdminUser
- **Parameters:**
  - name (string)
  - description (string)

### 5.3 Get, Update, Destroy Category
- **Endpoint:** `/api/products/category/<int:category_id>/`
- **Method:** `GET` (Get), `PUT` or `PATCH` (Update), `DELETE` (Destroy)
- **Description:** Get, update, or delete information for the specified category.
- **Protection:** IsAdminUser

## 6. Product Reviews
### 6.1 List Reviews
- **Endpoint:** `/api/products/reviews/`
- **Method:** `GET`
- **Description:** List all product reviews.
- **Protection:** IsAuthenticated

### 6.2 Create Review
- **Endpoint:** `/api/products/reviews/`
- **Method:** `POST`
- **Description:** Create a new product review.
- **Protection:** IsAuthenticated
- **Parameters:**
  - rating (integer)
  - comment (string)
  - product (integer)

### 6.3 Get, Update, Destroy Review
- **Endpoint:** `/api/products/reviews/<int:review_id>/`
- **Method:** `GET` (Get), `PUT` or `PATCH` (Update), `DELETE` (Destroy)
- **Description:** Get, update, or delete information for the specified review.
- **Protection:** IsAuthenticated, CanChangeReview (If the logged-in user is the author)

## 7. Product Specs
### 7.1 List Specs
- **Endpoint:** `/api/products/<int:prod_id>/specs/`
- **Method:** `GET`
- **Description:** List all product specs for a specific product.
- **Protection:** IsAuthenticated

### 7.2 Create Spec
- **Endpoint:** `/api/products/<int:prod_id>/specs/`
- **Method:** `POST`
- **Description:** Create a new product spec.
- **Protection:** IsAuthenticated
- **Parameters:**
  - name (string)
  - value (string)

### 7.3 Get, Update, Destroy Spec
- **Endpoint:** `/api/products/specs/<int:spec_id>/`
- **Method:** `GET` (Get), `PUT` or `PATCH` (Update), `DELETE` (Destroy)
- **Description:** Get, update, or delete information for the specified spec.
- **Protection:** IsAdminUser

## 8. Orders
### 8.1 List Orders
- **Endpoint:** `/api/orders/`
- **Method:** `GET`
- **Description:** List all orders for the logged-in user.
- **Protection:** IsAuthenticated

### 8.2 Create Order
- **Endpoint:** `/api/orders/`
- **Method:** `POST`
- **Description:** Create a new order.
- **Protection:** IsAuthenticated

### 8.3 Get, Destroy Order
- **Endpoint:** `/api/orders/<int:order_id>/`
- **Method:** `GET` (Get), `DELETE` (Destroy)
- **Description:** Get or delete information for the specified order.
- **Protection:** IsAuthenticated

## 9. Baskets
### 9.1 List Baskets
- **Endpoint:** `/api/baskets/`
- **Method:** `GET`
- **Description:** List all baskets for the logged-in user.
- **Protection:** IsAuthenticated

### 9.2 Create Basket
- **Endpoint:** `/api/baskets/`
- **Method:** `POST`
- **Description:** Create a new basket.
- **Protection:** IsAuthenticated
- **Parameters:**
  - product (integer)

### 9.3 Get, Update, Destroy Basket
- **Endpoint:** `/api/baskets/<int:basket_id>/`
- **Method:** `GET` (Get), `PUT` (Update: You can only update the quantity field), `DELETE` (Destroy)
- **Description:** Get, update, or delete information for the specified basket.
- **Protection:** IsAuthenticated

## 10. Wishlist
### 10.1 List Wishlists
- **Endpoint:** `/api/wishlist/`
- **Method:** `GET`
- **Description:** List all wishlists for the logged-in user.
- **Protection:** IsAuthenticated

### 10.2 Create Wishlist
- **Endpoint:** `/api/wishlist/`
- **Method:** `POST`
- **Description:** Create a new wishlist.
- **Protection:** IsAuthenticated
- **Parameters:**
  - product (integer)

### 10.3 Destroy Wishlist
- **Endpoint:** `/api/wishlist/<int:wishlist_id>/`
- **Method:** `DELETE`
- **Description:** Delete the specified wishlist.
- **Protection:** IsAuthenticated

## Authentication and Authorization
- **Authentication:** Token-based.
- **Authorization:** Different user types have different access rights.

## Data Formats
- **Request Format:** JSON
- **Response Format:** JSON
