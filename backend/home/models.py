from django.conf import settings
from django.db import models
class Vbcd(models.Model):
    'Generated Model'
    cvbv = models.BigIntegerField()
    sder = models.BigIntegerField()
    def test_method(self):
        import requests
        response = requests.get("https://hello.com")
        data = response.json()
        return data
