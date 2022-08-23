# Generated by Django 4.1 on 2022-08-23 08:33

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProcessTransaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('transaction_id', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('completed', models.BooleanField(default=False)),
                ('service_uuid', models.CharField(max_length=255)),
                ('updated_on', models.DateTimeField(auto_now_add=True)),
                ('created_on', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]