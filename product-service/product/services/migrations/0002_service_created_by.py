# Generated by Django 4.1 on 2022-08-22 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='created_by',
            field=models.EmailField(default='jane.doe@test.com', max_length=50),
            preserve_default=False,
        ),
    ]
