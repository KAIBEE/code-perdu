#!/bin/bash
docker build -t code-perdu-application .
docker tag code-perdu:latest 519236269948.dkr.ecr.eu-west-3.amazonaws.com/code-perdu:latest
docker push 519236269948.dkr.ecr.eu-west-3.amazonaws.com/code-perdu:latest

zip -r latest.zip Dockerrun.aws.json

aws s3 cp latest.zip s3://elasticbeanstalk-eu-west-3-519236269948/latest.zip
aws elasticbeanstalk create-application-version --application-name code-perdu-application \
    --version-label latest --source-bundle S3Bucket=elasticbeanstalk-eu-west-3-519236269948,S3Key=latest.zip
aws elasticbeanstalk update-environment --environment-name code-perdu \
      --version-label latest
