import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ProductsPage } from "./ProductsPage";

export class LoginPage extends BasePage {
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly password: Locator;
  readonly userName: Locator;

  constructor(page: Page) {
    super(page);
    this.userName = page.locator("#user-name");
    this.errorMessage = page.locator("[data-test='error']");
    this.password = page.locator("#password");
    this.loginButton = page.locator("#login-button");
  }
  async fillUserName(userName: string) {
    await this.fillTheField(this.userName, userName);
  }

  async fillPassword(password: string) {
    await this.fillTheField(this.password, password);
  }

  async doLogin(userName: string, password: string) {
    await this.fillUserName(userName);
    await this.fillPassword(password);
    await this.loginButton.click();
    return new ProductsPage(this.page);
  }

  async checkTitle() {
    expect(await this.getPageTitle()).toBe("Swag Labs");
  }

  async errorMessageText() {
    return this.errorMessage.textContent();
  }
}
