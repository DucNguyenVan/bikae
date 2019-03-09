console.log("hello world!")
const puppeteer = require('puppeteer');

async function crawl_grammar(sender_psid, callback){
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', interceptedRequest => {
    if (!interceptedRequest.url().includes('bikae.net'))
      interceptedRequest.abort();
    else
      interceptedRequest.continue();
  });
  await page.goto('https://bikae.net/ngu-phap/tong-hop-ngu-phap-n2/');
  const grammar_href = await page.evaluate(() => {
    var grammar_selectors = '.entry-content span a';
    var sum = document.querySelectorAll(grammar_selectors).length
    const rd_idx = (Math.random(0,sum/100)*100).toFixed();
    return document.querySelectorAll(grammar_selectors)[rd_idx].href;
  })
  await page.goto(grammar_href);
  const grammar = await page.evaluate(() => {
    return document.querySelector('.entry-header .entry-title').textContent
  })
  await browser.close();
  response = {
    "text": `${grammar} \n ${grammar_href}`
  }
  callback(sender_psid, response)
};

module.exports = {
  crawl_grammar: crawl_grammar
}
