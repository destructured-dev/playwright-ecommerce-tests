import { test, expect } from "@playwright/test";

test("login page displays its main controls", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await expect(page.getByPlaceholder("Username")).toBeVisible();

  await expect(page.getByPlaceholder("Password")).toBeVisible();

  await expect(page.getByRole("button", { name: "Login " })).toBeVisible();
});

test("standard user can login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");

  await page.getByPlaceholder("Password").fill("secret_sauce");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Products", { exact: true })).toBeVisible();
});

test("invalid creditials should show an error", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("invalid_user");

  await page.getByPlaceholder("Password").fill("secret_sauce");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByText(
      "Epic sadface: Username and password do not match any user in this service",
    ),
  ).toBeVisible();
});
