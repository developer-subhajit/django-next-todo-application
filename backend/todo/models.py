from django.db import models


# Create your models here.
class Todo(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    due_date = models.DateField(auto_now=False)
    status = models.CharField(
        max_length=9,
        choices=(("Todo", "Todo"), ("Ongoing", "Ongoing"), ("Done", "Done")),
        default="Todo",
    )

    def __str__(self):
        return self.title
