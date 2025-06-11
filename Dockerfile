
FROM node:18-alpine


ENV NODE_ENV=production
ENV PORT=3000


WORKDIR /app


COPY package*.json ./
COPY src/ ./src
COPY public/ ./public

RUN npm install


EXPOSE ${PORT}


CMD ["npm", "start"]