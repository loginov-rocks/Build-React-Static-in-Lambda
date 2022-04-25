# Build React Static in Lambda

How to build and deploy React Static project in Lambda: Medium.

## Configuration

### Lambda

* Architecture: `x86_64`
* Memory: `1024` MB (at least)
* Ephemeral storage: `512` MB (at least)
* Timeout: `15` min (maximum available)

#### Permissions

Configure IAM policy and create an AWS user (for local usage):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::build-react-static-in-lambda/*"
    }
  ]
}
```

#### Environment Variables

* `LAMBDA_ACCESS_KEY_ID` and `LAMBDA_SECRET_ACCESS_KEY` - credentials for the AWS user to deploy files, convenient for
  local development usage,
* `LAMBDA_S3_BUCKET_NAME` - S3 bucket name to deploy files to,
* `LAMBDA_USE_POLICY` - to use (`true`) or not to use (`false`) IAM policy instead of the AWS user, convenient within
  the actual Lambda environment,
* `LAMBDA_USE_TMPDIR` - to use (`true`) or not to use (`false`) temporary directory for the build artifacts, must
  be `true` within the actual Lambda environment.

## Development

Make sure to set up environment variables in `.env` file (see `.env.example`).

### Docker

#### Build

```sh
docker build -t build-react-static-in-lambda .
```

#### Run

```sh
docker run --env-file .env -p 9000:8080 build-react-static-in-lambda
```

#### Test

```sh
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```

#### Explore container

```sh
docker ps
docker exec -it <CONTAINER ID> bash
```

### Without Docker

```sh
npm install
node lambda/without-docker
```

## Reference

* [Creating Lambda container images](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html)
* [Running Gatsby in an AWS Lambda](https://www.jameshill.dev/articles/running-gatsby-within-aws-lambda/)
