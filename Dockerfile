# Compléter ce Dockerfile afin de pouvoir lancer l'application Todolist
FROM node:22-alpine

WORKDIR /app

COPY package*.json .
RUN npm install

ENV DATABASE_URL="postgresql://user:password@localhost:5432/db?schema=public"

COPY ./prisma .
RUN npx prisma generate

ENV POSTGRES_DB=todolist
ENV POSTGRES_USER=todo-user
ENV POSTGRES_PASSWORD=todo-secret

COPY . .
RUN npm run build
EXPOSE 4173


COPY docker-entrypoint.sh /

ENTRYPOINT [ "/docker-entrypoint.sh" ]