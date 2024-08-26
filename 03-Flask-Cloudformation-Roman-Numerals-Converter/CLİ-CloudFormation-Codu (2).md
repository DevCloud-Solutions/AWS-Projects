aws cloudformation create-stack \
  --stack-name MyEC2Stack \
  --template-body file://onedrive/masaüstü/cfn-template.yaml


aws ec2 run-instances \
  --image-id ami-0230bd60aa48260c6 \
  --count 1 \
  --instance-type t2.micro \
  --key-name firstkey \
  --user-data file://./Cli.sh \
  --security-group-ids sg-0b8831412f70c500a