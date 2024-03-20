import stripe
from django.core.validators import MaxValueValidator
from django.conf import settings
from django.db import models
from user.models import User

stripe.api_key = settings.STRIPE_SECRET_KEY


class ProductCategory(models.Model):
    name = models.CharField(max_length=128, unique=True)
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class ProductSubCategory(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, related_name='subcategories')
    name = models.CharField(max_length=128, unique=True)
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'SubCategory'
        verbose_name_plural = 'SubCategories'

    def __str__(self):
        return f"{self.category.name} - {self.name}"


class Product(models.Model):
    name = models.CharField(max_length=256)
    price = models.DecimalField(max_digits=8, decimal_places=2, db_index=True)
    old_price = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    quantity = models.PositiveIntegerField(default=0)
    image_1 = models.ImageField(upload_to='products_images', default="products_images/default_image.jpg")
    image_2 = models.ImageField(upload_to='products_images', null=True, blank=True)
    image_3 = models.ImageField(upload_to='products_images', null=True, blank=True)
    image_4 = models.ImageField(upload_to='products_images', null=True, blank=True)
    subcategory = models.ForeignKey(to=ProductSubCategory, on_delete=models.PROTECT, db_index=True)
    stripe_price_id = models.CharField(max_length=128, null=True, blank=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

        indexes = [
            models.Index(fields=['price'], name='price_idx'),
            models.Index(fields=['subcategory'], name='subcategory_idx'),
        ]

    def __str__(self):
        return f'{self.name}|{self.subcategory.name}|{self.subcategory.category.name}'

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        if not self.stripe_price_id:
            stripe_product_price = self.create_stripe_product_price()
            self.stripe_price_id = stripe_product_price['id']
        super(Product, self).save(force_insert=False, force_update=False, using=None, update_fields=None)

    def create_stripe_product_price(self):
        stripe_product = stripe.Product.create(name=self.name)
        stripe_product_price = stripe.Price.create(
            product=stripe_product['id'],
            unit_amount=round(self.price * 100),
            currency="uah",
        )
        return stripe_product_price

    @property
    def specs(self):
        return self.productspecs_set.all()


class ProductSpecs(models.Model):
    name = models.CharField(max_length=256, db_index=True)
    value = models.CharField(max_length=256, db_index=True)
    product_id = models.ForeignKey(to=Product, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'ProductSpecs'
        verbose_name_plural = 'ProductSpecs'
        unique_together = "name", "product_id"


class SubcategorySpecs(models.Model):
    name = models.CharField(max_length=256, db_index=True)
    allowed_value = models.JSONField(default=list, blank=True, null=True)
    subcategory = models.ForeignKey(to=ProductSubCategory, on_delete=models.CASCADE)

    class Meta:
        unique_together = "name", "subcategory"


class ProductReview(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(validators=[MaxValueValidator(5)])
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class BasketQuerySet(models.QuerySet):
    def total_sum(self):
        return sum(basket.sum() for basket in self)

    def total_quantity(self):
        return sum(basket.quantity for basket in self)

    def stripe_products(self):
        line_items = []
        for basket in self:
            item = {
                'price': basket.product.stripe_price_id,
                'quantity': basket.quantity,
            }
            line_items.append(item)
        return line_items


class Basket(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    product = models.ForeignKey(to=Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    created_timestamp = models.DateTimeField(auto_now_add=True)

    objects = BasketQuerySet.as_manager()

    class Meta:
        unique_together = "user", "product"

    def __str__(self):
        return f'Basket for {self.user.email} | Product: {self.product.name}'

    def sum(self):
        return self.product.price * self.quantity

    def de_json(self):
        basket_item = {
            'product_name': self.product.name,
            'quantity': self.quantity,
            'price': float(self.product.price),
            'sum': float(self.sum()),
        }
        return basket_item


class Wishlist(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    product = models.ForeignKey(to=Product, on_delete=models.CASCADE)

    def __str__(self):
        return f'Wishlist for {self.user.email} | Product: {self.product.name}'

    class Meta:
        unique_together = "user", "product"
