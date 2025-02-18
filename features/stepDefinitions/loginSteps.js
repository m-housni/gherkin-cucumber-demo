const { Given, When, Then } = require("@cucumber/cucumber");
const puppeteer = require("puppeteer");

let browser, page;
let expect;

Given("the user is on the login page", async function () {
  if (!expect) {
    const chai = await import("chai");
    expect = chai.expect;
  }
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
  await page.goto("http://localhost:5173"); // Replace with actual login page
});

When("the user enters {string} and {string}", async function (email, password) {
  await page.type("#email", email);
  await page.type("#password", password);
});

When("clicks on the login button", async function () {
  await page.click("#loginButton");
  await page.waitForNavigation();
});

Then("the user should see the dashboard", async function () {
  const dashboardText = await page.$eval(".dashboard", (el) => el.textContent);
  expect(dashboardText).to.include("Welcome");
  await browser.close();
});

Then("an error message should be displayed", async function () {
  const errorText = await page.$eval(".error", (el) => el.textContent);
  expect(errorText).to.include("User not found");
  await browser.close();
});
