console.log("hello world!")
const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', interceptedRequest => {
    if (!interceptedRequest.url().includes('bikae.net'))
      interceptedRequest.abort();
    else
      interceptedRequest.continue();
  });
  console.log("aaaaaaa")
  await page.goto('https://bikae.net/ngu-phap/tong-hop-ngu-phap-n2/');
  //rd_idx = await page.$$eval('.entry-content li', a => {sum = a.length; idx = (Math.random(0, sum/100)*100).toFixed(); return a});
  const href = await page.evaluate(() => {
    var sum = document.querySelectorAll('.entry-content li a').length
    const rd_idx = (Math.random(0,sum/100)*100).toFixed();
    return document.querySelectorAll('.entry-content li span a')[rd_idx].href
  })
  console.log(href)
  await page.goto(href);
  const screenshotElement = await page.$('.entry-content');
  await screenshotElement.screenshot({path: 'example.png'});

  await browser.close();
})();

