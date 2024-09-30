FROM node:18

ENV TZ=Asia/Seoul

WORKDIR /app

# bash 설치
RUN apk add --no-cache bash 

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

COPY wait-for-it.sh .
RUN chmod +x wait-for-it.sh

CMD ["sh", "-c", "./wait-for-it.sh ${DB_HOST}:${DB_INNER_PORT} --timeout=30 --strict -- yarn typeorm:d migration:run && yarn start"]