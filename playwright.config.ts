import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";
import os from "node:os";
dotenv.config({ override: true });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["html", { open: "never" }],
    ["line"],
    [
      "allure-playwright",
      {
        environmentInfo: {
          OS: os.platform(),
          Architecture: os.arch(),
          NodeVersion: process.version,
        },
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    screenshot: "only-on-failure",
    video: {
      mode: "on-first-retry",
      size: { width: 640, height: 480 },
    },
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "ui_tests",
      testMatch: "ui/**/*",
      use: {
        baseURL: "https://www.saucedemo.com/",
      },
    },

    {
      name: "api_tests",
      testMatch: "api/**/*",
      use: {
        baseURL: "https://reqres.in/api/",
        extraHTTPHeaders: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    },
  ],
});
