# https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-create-from-base
FROM public.ecr.aws/lambda/nodejs:14
COPY . ${LAMBDA_TASK_ROOT}
RUN npm install
CMD ["lambda/index.handler"]
