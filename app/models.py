from django.db import models

# Create your models here.

class JET(models.Model):
    title=models.CharField(max_length=250)
    decription=models.TextField()
    image=models.ImageField(upload_to="static/images/")
    zaryad = models.FloatField(help_text="Zaryad darajasi (foizda)")




    def __str__(self):
        return f"{self.title} - {self.zaryad}%"


