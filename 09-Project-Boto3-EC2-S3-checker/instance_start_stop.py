import boto3
from datetime import datetime, timedelta
import pytz
import time

start_time = 8
start_minute = 00
stop_time = 18
stop_minute = 00

timezone = 'Europe/Istanbul'

ec2 = boto3.resource('ec2')

while True:
    current_hour = datetime.now(pytz.timezone(timezone)).hour
    current_minute = datetime.now(pytz.timezone(timezone)).minute

    for instance in ec2.instances.all():
        if instance.state['Name'] == "stopped" and current_hour == start_time and current_minute == start_minute \
                and any(tag['Key'] == 'ahmet' and tag['Value'] == 'pazarlama' for tag in instance.tags):
            instance.start()
            print(f"{instance.id} starts every day at {start_time}:{start_minute}")

        elif instance.state['Name'] == "running" and current_hour == stop_time and current_minute == stop_minute \
                and any(tag['Key'] == 'ahmet' and tag['Value'] == 'pazarlama' for tag in instance.tags):
            instance.stop()
            print(f"{instance.id} stops every day at {stop_time}:{stop_minute}")

        else:
            print(f"{instance.id} not both {instance.tags} {instance.state}")

    time.sleep(3600)

