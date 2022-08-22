# Generated by Django 4.1 on 2022-08-22 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('updated_on', models.DateTimeField(auto_now_add=True)),
                ('created_on', models.DateTimeField(auto_now=True)),
                ('description', models.TextField()),
            ],
        ),
    ]
