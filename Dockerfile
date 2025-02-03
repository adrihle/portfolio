FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN chown -R node:node /app

COPY ./ ./

RUN npm run build

# -------------------------

FROM node:20.10-alpine AS dev

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

EXPOSE 3000

CMD ["npm", "run", "dev"]


# -------------------------

FROM node:20.10-alpine AS prod

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

EXPOSE 3000

CMD ["npm", "run", "start"]
