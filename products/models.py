from django.db import models
from autoslug import AutoSlugField
from web.utils import id_generator
from django.db.models import Q


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

    def search(self, q):
        lookups = (
            Q(title__icontains=q) |
            Q(description__icontains=q) |
            Q(sizes__size__icontains=q)
        )
        return self.filter(lookups).distinct()


class ProductManager(models.Manager):
    def get_queryset(self):
        return ProductQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def search(self, q):
        return self.get_queryset().active().search(q)


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
    discount_price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True)
    sizes = models.ManyToManyField(Size, blank=True)
    colors = models.ManyToManyField(Color, blank=True)
    available = models.BooleanField(default=True)
    available_count = models.PositiveIntegerField()
    active = models.BooleanField(default=True)
    sale_count = models.IntegerField(default=0)
    code = models.CharField(max_length=40, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = ProductManager()

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.code = id_generator()
        super(Product, self).save(*args, **kwargs)

    @property
    def discount_percent(self):
        if self.discount_price:
            discount_percent = 100 - (self.discount_price * 100) / self.price
            return int(discount_percent)
        return

    @property
    def final_price(self):
        if self.discount_price:
            return self.discount_price
        return self.price
