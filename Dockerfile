FROM node:8

# Create app directory
WORKDIR /bikae

RUN npm install && npm install puppeteer express body-parser request
# If you are building your code for production
# RUN npm install --only=production

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    gconf-service \
vim \
libasound2 \
libatk1.0-0 \
libc6 \
libcairo2 \
libcups2 \
libdbus-1-3 \
libexpat1 \
libfontconfig1 \
libgcc1 \
libgconf-2-4 \
libgdk-pixbuf2.0-0 \
libglib2.0-0 \
libgtk-3-0 \
libnspr4 \
libpango-1.0-0 \
libpangocairo-1.0-0 \
libstdc++6 \
libx11-6 \
libx11-xcb1 \
libxcb1 \
libxcomposite1 \
libxcursor1 \
libxdamage1 \
libxext6 \
libxfixes3 \
libxi6 \
libxrandr2 \
libxrender1 \
libxss1 \
libxtst6 \
ca-certificates \
fonts-liberation \
libappindicator1 \
libnss3 \
lsb-release \
xdg-utils \
wget

# Japanese font
#RUN echo 'deb http://ftp.jp.debian.org/debian jessie-backports main' >> /etc/apt/sources.list
RUN apt-get install fonts-ipafont-gothic fonts-ipafont-mincho

# Bundle app source
COPY . .

EXPOSE 8080
#CMD ["sh"]
