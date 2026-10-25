import { test, expect, defineConfig } from "@playwright/test";

test.describe("Logon validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
  });

  test("login page displays its main controls", async ({ page }) => {
    await expect(page.getByPlaceholder("Username")).toBeVisible();

    await expect(page.getByPlaceholder("Password")).toBeVisible();

    await expect(page.getByRole("button", { name: "Login " })).toBeVisible();
  });

  test("standard user can login", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("standard_user");

    await page.getByPlaceholder("Password").fill("secret_sauce");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByText("Products", { exact: true })).toBeVisible();
  });

  test("invalid creditials should show an error", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("invalid_user");

    await page.getByPlaceholder("Password").fill("secret_sauce");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByTestId("error")).toBeVisible();

    await expect(page.getByText("Products", { exact: true })).not.toBeVisible();
  });

  test("Blank username and password should show an error", async ({ page }) => {
    await page.getByPlaceholder("Username").clear();

    await page.getByPlaceholder("Password").clear();

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByTestId("error")).toBeVisible();

    await expect(page.getByText("Products", { exact: true })).not.toBeVisible();
  });

  test("blank username should show an error", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("standard_user");

    await page.getByPlaceholder("Password").clear();

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByTestId("error")).toBeVisible();

    await expect(page.getByText("Products", { exact: true })).not.toBeVisible();
  });

  test("blank password should show an error", async ({ page }) => {
    await page.getByPlaceholder("Username").clear();

    await page.getByPlaceholder("Password").fill("special_sauce");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByTestId("error")).toBeVisible();

    await expect(page.getByText("Products", { exact: true })).not.toBeVisible();
  });
});
