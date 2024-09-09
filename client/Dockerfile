FROM node:18-alpine As production

ENV TZ=Asia/Seoul

WORKDIR /app

# bash 설치
RUN apk add --no-cache bash 

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]
