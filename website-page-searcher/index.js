const cheerio = require('cheerio');
const request = require('request');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Webpage Text Searcher");

readline.question('Enter the URL of the webpage you want to search: ', url => {
  readline.question('Enter the CSS selector you want to search: ', selector => {
    console.log(`Searching for ${selector} at ${url}...`);
    request(url, (error, response, body) => {
      const $ = cheerio.load(body);
      const searchText = $(selector).text();

      if (searchText === '') {
        console.log('----------------------------------------');
        console.log("No text found at that selector.");
        console.log('----------------------------------------');
      } else {
        console.log('----------------------------------------');
        console.log("Found the following text:");
        console.log(searchText);
        console.log('----------------------------------------');
      }
    readline.close();
    });
  });
});