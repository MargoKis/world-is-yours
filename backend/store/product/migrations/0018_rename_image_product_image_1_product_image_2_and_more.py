# Generated by Django 4.2.6 on 2024-02-29 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0017_product_stripe_price_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='image',
            new_name='image_1',
        ),
        migrations.AddField(
            model_name='product',
            name='image_2',
            field=models.ImageField(blank=True, null=True, upload_to='products_images'),
        ),
        migrations.AddField(
            model_name='product',
            name='image_3',
            field=models.ImageField(blank=True, null=True, upload_to='products_images'),
        ),
        migrations.AddField(
            model_name='product',
            name='image_4',
            field=models.ImageField(blank=True, null=True, upload_to='products_images'),
        ),
    ]
