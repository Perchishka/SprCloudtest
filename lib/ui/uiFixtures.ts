import { test as base } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { ProductsPage } from "./ProductsPage";
type UiFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
};

const fixtures = base.extend<UiFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  }
});

export { fixtures };
