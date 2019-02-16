# bikae
for japanese learning

Step 1: docker-compose build

Step 2: docker-compose up

Step 3(need or not): docker exec -it bikae_app_1 /bin/bash  

Step 4(need or not): At container, run
`node app.js`

Step 5: copy image form container to host. At host, run
`docker cp bikae_app_1:/bikae/example.png ~/Desktop/screenshots`


# User puppeteer with heroku
https://github.com/CoffeeAndCode/puppeteer-heroku-buildpack
