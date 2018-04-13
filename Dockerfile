FROM node:9

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get update; dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install; rm -rf /var/lib/apt/lists/*
RUN npm i -g pm2

WORKDIR /app
COPY . .
RUN npm i

EXPOSE 80
ENTRYPOINT [ "./run.sh" ]