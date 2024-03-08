import logging

from django.db import models
from user.models import User
from product.models import Basket

logger = logging.getLogger('order_logger')


class Order(models.Model):
    CREATED = 1
    PAID = 2
    ON_WAY = 3
    DELIVERED = 4
    CANCELED = 0
    STATUSES = (
        (CREATED, 'Created'),
        (PAID, 'Paid'),
        (ON_WAY, 'On way'),
        (DELIVERED, 'Delivered'),
        (CANCELED, 'Canceled')
    )

    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    address = models.CharField(max_length=256)
    basket_history = models.JSONField(default=dict)
    created = models.DateTimeField(auto_now_add=True)
    status = models.SmallIntegerField(default=CREATED, choices=STATUSES)
    initiator = models.ForeignKey(to=User, on_delete=models.CASCADE)

    def __str__(self):
        return f'Order #{self.id}. {self.first_name} {self.last_name}'

    def update_after_payment(self):
        baskets = Basket.objects.filter(user=self.initiator)
        self.status = self.PAID
        self.basket_history = {
            'purchased_items': [basket.de_json() for basket in baskets],
            'total_sum': float(baskets.total_sum()),
        }
        logger.info({
            'order_id': self.id,
            'user': self.initiator,
            'total_sum': float(baskets.total_sum()),
        })
        baskets.delete()
        self.save()

