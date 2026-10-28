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

  test("TC-INV-003 Add a product to the shopping cart", async ({ page }) => {
    // Add the backpack to the cart
    await page.getByTestId("add-to-cart-sauce-labs-backpack").click();

    // Check that the cart icon shows 1 product
    await expect(page.getByTestId("shopping-cart-badge")).toContainText("1");

    // Check that the backpack product is still visible

    await expect(
      page
        .getByTestId("inventory-item-name")
        .filter({ hasText: "Sauce Labs Backpack" }),
    ).toBeVisible();
  });

  //------------------------------------------------------------
  // TODO
  // This fails in webkit - unsorted prices is creating an empty array
  //------------------------------------------------------------

  test("TC-INV-004 Sort products by price ascending", async ({ page }) => {
    // get the prices of inventory items before sorting
    const unsortedPrices = await page
      .getByTestId("inventory-item-price")
      .allTextContents();

    await page
      .getByTestId("product-sort-container")
      .selectOption({ value: "lohi" });

    //Get and array of the names of inventory prices
    const inventoryNames = await page
      .getByTestId("inventory-item-price")
      .allTextContents();

    // Sort the unsorted array by price ascending, first stripping dollar sign and parsing to float

    unsortedPrices.sort((a, b) => {
      const priceA = parseFloat(a.replace("$", ""));
      const priceB = parseFloat(b.replace("$", ""));
      return priceA - priceB;
    });

    console.log(unsortedPrices);
    console.log(inventoryNames);
    // Check if the arrays are equal
    expect(unsortedPrices).toEqual(inventoryNames);

    // Check that all items are visible after the sort
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

  test("TC-INV-005 Remove a product from the shopping cart", async ({
    page,
  }) => {
    // Add the backpack to the cart
    await page.getByTestId("add-to-cart-sauce-labs-backpack").click();

    // Check that the cart icon shows 1 product
    await expect(page.getByTestId("shopping-cart-badge")).toContainText("1");

    // Remove the backpack from the cart
    await page.getByTestId("remove-sauce-labs-backpack").click();

    // Check that the cart icon shows 0 products
    await expect(page.getByTestId("shopping-cart-badge")).not.toBeVisible();
  });

  test("TC-INV-006 Open a product detail page", async ({ page }) => {
    // Click on the backpack product name to open the product detail page
    await page
      .getByTestId("inventory-item-name")
      .filter({ hasText: "Sauce Labs Backpack" })
      .click();

    // Check that the product detail page is displayed
    await expect(page.getByTestId("inventory-item-name")).toContainText(
      "Sauce Labs Backpack",
    );
  });
});
