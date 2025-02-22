# Generated by Django 5.0.4 on 2024-07-05 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_item_address_remove_item_employment_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='civil_status',
            field=models.CharField(blank=True, choices=[('SINGLE', 'Single'), ('MARRIED', 'Married'), ('SEPARATED', 'separated'), ('DIVORCED', 'Divorced'), ('WIDOWED', 'Widowed')], max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='sex',
            field=models.CharField(blank=True, choices=[('M', 'Male'), ('F', 'Female')], max_length=1, null=True),
        ),
    ]
