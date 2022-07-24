export const Config = {
  baseURL: 'https://www.flybuys.co.nz',
  blogPostURL: 'https://jsonplaceholder.typicode.com', // this is an example api service
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.81 Safari/537.36',
  headless: process.env.HEADLESS ? process.env.HEADLESS === 'true' : true,
  viewport: process.env.VIEWPORT ? process.env.VIEWPORT.replace('x', ',') : '1440,900',
};

export const BrowserOptions = [
  '--disable-gpu',
  '--disable-logging',
  '--no-sandbox',
  '--disable-dev-shm-usage',
  `--window-size=${Config.viewport}`,
  `--user-agent=${Config.userAgent}`,
];
