from django.db import models
from autoslug import AutoSlugField
from web.utils import id_generator


class Size(models.Model):
    size = models.CharField(max_length=50)
    min_size = models.PositiveIntegerField()
    max_size = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.size}-{self.min_size}-{self.max_size}'


class Color(models.Model):
    color = models.CharField(max_length=100)
    hex_code = models.CharField(max_length=10)

    def __str__(self):
        return f'{self.color}-{self.hex_code}'


class ProductQuerySet(models.QuerySet):
    def active(self):
        return self.filter(active=True)


class ProductManager(models.Manager):
    def get_queryset(self):
        return ProductQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()


class Product(models.Model):
    title = models.CharField(max_length=120)
    slug = AutoSlugField(populate_from='title')
    photo_main = models.ImageField(upload_to='product_photos/%Y/%m/%d/')
    photo_1 = models.ImageField(blank=True, null=True)
    photo_2 = models.ImageField(blank=True, null=True)
    photo_3 = models.ImageField(blank=True, null=True)
    photo_4 = models.ImageField(blank=True, null=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    sizes = models.ManyToManyField(Size, blank=True)
    colors = models.ManyToManyField(Color, blank=True)
    available = models.BooleanField(default=True)
    available_count = models.PositiveIntegerField()
    active = models.BooleanField(default=True)
    sale_count = models.IntegerField(default=0)
    code = models.CharField(max_length=40, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = ProductManager()

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.code = id_generator()
        super(Product, self).save(*args, **kwargs)
