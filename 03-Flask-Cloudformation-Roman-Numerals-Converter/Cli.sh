#! /bin/bash
dnf update -y
dnf install python3 -y
dnf install python3-pip -y
pip3 install flask
cd /home/ec2-user
wget https://raw.githubusercontent.com/ahmettgg/AWS_My_Project/main/03-Flask-Cloudformation-Roman-Numerals-Converter/roman-numerals-converter-app.py
mkdir templates && cd /home/ec2-user/templates
wget https://raw.githubusercontent.com/ahmettgg/AWS_My_Project/main/03-Flask-Cloudformation-Roman-Numerals-Converter/templates/index.html
wget https://raw.githubusercontent.com/ahmettgg/AWS_My_Project/main/03-Flask-Cloudformation-Roman-Numerals-Converter/templates/result.html
cd ..
python3 roman-numerals-converter-app.py