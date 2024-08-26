
import boto3

import json

from datetime import datetime

import pytz


start_time = 8
start_minute = 0
stop_time = 18
stop_minute = 0

timezone = 'Europe/Istanbul'
current_hour = datetime.now(pytz.timezone(timezone)).hour
current_minute = datetime.now(pytz.timezone(timezone)).minute




ec2 = boto3.resource('ec2')

for instance in ec2.instances.all():
    if instance.state['Name'] == "stopped" and current_hour == int(start_time) and instance.tags[0] == {'Key': 'ahmet', 'Value': 'pazarlama'}:
        instance.start()
        print(f"{instance.id} starts every day at {start_time}")
    
    elif instance.state['Name'] == "running" and current_hour == int(stop_time) and current_minute == int(stop_minute) and instance.tags[0] == {'Key': 'ahmet', 'Value': 'pazarlama'}:
        instance.stop()
        print(f"{instance.id} stops every day at {stop_time}")
    
    else:
        print(f"{instance.id} not both {instance.tags[0]} {instance.state}")

