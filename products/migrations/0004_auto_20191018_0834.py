# Generated by Django 2.2.3 on 2019-10-18 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20191010_1315'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='photo_1',
            field=models.ImageField(blank=True, null=True, upload_to='product_photos/%Y/%m/%d/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='photo_2',
            field=models.ImageField(blank=True, null=True, upload_to='product_photos/%Y/%m/%d/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='photo_3',
            field=models.ImageField(blank=True, null=True, upload_to='product_photos/%Y/%m/%d/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='photo_4',
            field=models.ImageField(blank=True, null=True, upload_to='product_photos/%Y/%m/%d/'),
        ),
    ]