const { Builder } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");

(async function example() {
  let chrome_option = new Options();
  chrome_option.options_["debuggerAddress"] = "127.0.0.1:9222";

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chrome_option)
    .build();
  try {
    // 네이버 실행
    await driver.get("https://www.naver.com/");
  } finally {
    driver.quit();
  }
})();
