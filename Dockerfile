FROM node:18 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

FROM node:18 as production

WORKDIR /app

RUN npm install -g serve

ENV NODE_ENV=production

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
