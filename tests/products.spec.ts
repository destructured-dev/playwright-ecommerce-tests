import { test, expect } from "@playwright/test";

test.describe("Logon validation", () => {
  test.beforeEach(async ({ page }) => {
    //Go to the URL, enter username and password and click the Login button
    await page.goto("https://www.saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
  });

  test("TC-INV-001 Display the product inventory", async ({ page }) => {
    // test opened the Products page
    await expect(page.getByTestId("title")).toContainText("Products");

    // test that there are six product cards
    await expect(page.getByTestId("inventory-item")).toHaveCount(6);

    // test that all product cards have an image, heading, description, price and Add to cart button

    const inventoryItems = await page.getByTestId("inventory-item").all();
    for (const item of inventoryItems) {
      const titleElement = item.getByTestId("inventory-item-name");
      const imgElement = item.getByRole("img");
      const descriptionElement = item.getByTestId("inventory-item-desc");
      const priceElement = item.getByTestId("inventory-item-price");
      const buttonElement = item.getByRole("button", { name: "Add to cart" });

      await expect(titleElement).toBeVisible();
      await expect(imgElement).toBeVisible();
      await expect(descriptionElement).toBeVisible();
      await expect(priceElement).toBeVisible();
      await expect(buttonElement).toBeVisible();
    }
  });

  test("TC-INV-002 Sort products by name ascending", async ({ page }) => {
    // Choose the 'Names (Z to A) option in the sort dropdown
    await page
      .getByTestId("product-sort-container")
      .selectOption({ value: "za" });

    //Get and array of the names of inventory items
    const inventoryNames = await page
      .getByTestId("inventory-item-name")
      .allTextContents();

    // Copy the array and sort it alphabetically ascending
    const sortedInventoryNames = inventoryNames;
    sortedInventoryNames.sort((a, b) => b.localeCompare(a));

    // Check if the arrays are equal
    expect(sortedInventoryNames).toEqual(inventoryNames);

    // Check that all items are visible after the sort
  });
});
