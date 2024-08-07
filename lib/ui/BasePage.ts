import { Locator, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillTheField(field: Locator, value: string) {
    await field.clear();
    await field.fill(value);
  }

  async getPageTitle() {
    return this.page.title();
  }
}
