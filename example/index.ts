import playwright from 'playwright';
import { solveCaptcha } from '../src';

const URL = 'https://accounts.hcaptcha.com/demo';

const API_KEY = ''; // <-- your API key here

const main = async (): Promise<void> => {
  const browser = await playwright.chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(URL);
  await page.waitForLoadState('networkidle');

  await solveCaptcha(page, API_KEY, 'pro');

  await page.screenshot({ path: `example/test.jpeg` });

  await browser.close();
};

main();
