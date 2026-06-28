const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    } else {
      console.log('BROWSER LOG:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE ERROR (Uncaught exception):', err.message);
  });

  page.on('requestfailed', request => {
    console.log('NETWORK ERROR:', request.url(), request.failure().errorText);
  });

  await page.goto('https://tumangbaliclass.com/admin', { waitUntil: 'networkidle2' });
  
  // Wait a moment for React hydration
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  await browser.close();
})();
