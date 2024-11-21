# Generated by Django 5.1.3 on 2024-11-20 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("todo", "0003_remove_todo_completed_todo_status"),
    ]

    operations = [
        migrations.AlterField(
            model_name="todo",
            name="status",
            field=models.CharField(
                choices=[("Todo", "Todo"), ("Ongoing", "Ongoing"), ("Done", "Done")],
                default="Todo",
                max_length=9,
            ),
        ),
    ]