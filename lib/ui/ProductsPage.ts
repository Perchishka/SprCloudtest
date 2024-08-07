import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
  readonly productTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.productTitle = page.locator("[data-test='title']");
  }

  async getHeaderText() {
    const title = await this.productTitle.textContent();
    return title;
  }
}
