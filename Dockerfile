# Install dependencies only when needed
FROM node:lts AS build

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY . /app
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

RUN yarn build

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html/
WORKDIR /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]