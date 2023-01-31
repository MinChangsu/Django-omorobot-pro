from django.db import models


# Create your models here.

class Info(models.Model):
    bat = models.CharField(max_length=30, null=True, blank=True)
    color_r = models.IntegerField(null=True, blank=True)
    color_g = models.IntegerField(null=True, blank=True)
    color_b = models.IntegerField(null=True, blank=True)
    encoder_l = models.IntegerField(null=True, blank=True)
    encoder_r = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at.strftime("%D %H:%M")}'


