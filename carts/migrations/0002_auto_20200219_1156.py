# Generated by Django 2.2.8 on 2020-02-19 11:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('carts', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='cart',
            options={'ordering': ('-created_at',)},
        ),
    ]