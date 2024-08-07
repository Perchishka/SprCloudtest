import { expect } from "@playwright/test";
import { fixtures as test } from "../../lib/ui/uiFixtures";
import userData from "../../lib/ui/data/user-data";
import errorMessages from "../../lib/ui/data/error-messages";

const userName = process.env.USERNAME!;
const password = process.env.PASSWORD!;

test.describe("Login tests", () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto("/");
    await loginPage.checkTitle();
  });

  test("Create user", async ({ loginPage }) => {
    const productsPage = await loginPage.doLogin(userName, password);
    expect(await productsPage.getHeaderText()).toBe("Products");
  });

  test("failing login - invalid username", async ({ loginPage }) => {
    const invalidUsername = userData.invalidUsername;
    await loginPage.doLogin(invalidUsername, password);
    expect(await loginPage.errorMessageText()).toBe(
      errorMessages.invalidUsernameAndPassword
    );
  });

  test("failing login - invalid password", async ({ loginPage }) => {
    const invalidPassword = userData.invalidPassword;
    await loginPage.doLogin(userName, invalidPassword);
    expect(await loginPage.errorMessageText()).toBe(
      errorMessages.invalidUsernameAndPassword
    );
  });
});
