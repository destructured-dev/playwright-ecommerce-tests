# Inventory Page — Test Cases

**Feature:** Product Inventory  
**Application:** [SauceDemo](https://www.saucedemo.com/)  
**Related automation:** `tests/inventory.spec.js`

## TC-INV-001 — Display the product inventory

| Field             | Details                              |
| ----------------- | ------------------------------------ |
| Priority          | High                                 |
| Type              | Functional UI                        |
| Automation status | Automated                            |
| Preconditions     | User is logged in as `standard_user` |
| Test data         | Standard SauceDemo account           |

### Steps

1. Navigate to the inventory page.
2. Verify the page heading.
3. Count the displayed product cards.
4. Verify that each product card displays a name, description, image, price and action button.

### Expected results

- The page heading displays `Products`.
- Six product cards are displayed.
- Each product card contains all required elements.
- The shopping cart icon and sorting control are visible.

### Automation

- **Playwright test:** `TC-INV-001`
- **Spec file:** `tests/inventory.spec.js`

---

## TC-INV-002 — Sort products by name ascending

| Field             | Details                                          |
| ----------------- | ------------------------------------------------ |
| Priority          | Medium                                           |
| Type              | Functional UI                                    |
| Automation status | Automated                                        |
| Preconditions     | User is logged in and the inventory page is open |
| Test data         | All displayed products                           |

### Steps

1. Open the product sorting dropdown.
2. Select `Name (A to Z)`.
3. Read the displayed product names in order.
4. Compare the displayed order with an alphabetically sorted list.

### Expected results

- The selected sorting option is `Name (A to Z)`.
- Products appear in ascending alphabetical order.
- Every product remains visible after sorting.

### Automation

- **Playwright test:** `TC-INV-002`
- **Spec file:** `tests/inventory.spec.js`

---

## TC-INV-003 — Add a product to the shopping cart

| Field             | Details                                 |
| ----------------- | --------------------------------------- |
| Priority          | High                                    |
| Type              | Functional UI                           |
| Automation status | Automated                               |
| Preconditions     | User is logged in and the cart is empty |
| Test data         | Sauce Labs Backpack                     |

### Steps

1. Locate the Sauce Labs Backpack product.
2. Click its `Add to cart` button.
3. Verify the product button's updated state.
4. Verify the shopping cart badge.

### Expected results

- The button changes from `Add to cart` to `Remove`.
- The shopping cart badge displays `1`.
- The selected product remains visible on the inventory page.

### Automation

- **Playwright test:** `TC-INV-003`
- **Spec file:** `tests/inventory.spec.js`

---

## TC-INV-004 — Sort products by price ascending

| Field             | Details                                          |
| ----------------- | ------------------------------------------------ |
| Priority          | Medium                                           |
| Type              | Functional UI                                    |
| Automation status | Not automated                                    |
| Preconditions     | User is logged in and the inventory page is open |
| Test data         | All displayed products                           |

### Steps

1. Open the product sorting dropdown.
2. Select `Price (low to high)`.
3. Review the prices in the displayed product list.

### Expected results

- The selected sorting option is `Price (low to high)`.
- Prices appear in ascending numerical order.
- Sauce Labs Onesie, priced at $7.99, appears first.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-005 — Remove a product from the cart

| Field             | Details                                                                   |
| ----------------- | ------------------------------------------------------------------------- |
| Priority          | Medium                                                                    |
| Type              | Functional UI                                                             |
| Automation status | Not automated                                                             |
| Preconditions     | User is logged, the inventory page is open and one product is in the cart |
| Test data         | All displayed products                                                    |

### Steps

1. Locate the product that has been added to the cart.
2. Click its `Remove from Cart` button.
3. Verify the product button's updated state.
4. Verify the shopping cart badge.

### Expected results

- The button changes from `Remove` to `Add to cart`.
- The shopping cart badge displays no number .
- The selected product remains visible on the inventory page.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-006 — Open a product detail page

| Field             | Details                                          |
| ----------------- | ------------------------------------------------ |
| Priority          | Medium                                           |
| Type              | Functional UI                                    |
| Automation status | Not automated                                    |
| Preconditions     | User is logged in and the inventory page is open |
| Test data         | All displayed products                           |

### Steps

1. Click the product heading link for the first product in the product page.
2. Verify that the product page for the same product opens.
3. Click the `Back to products` link.
4. Click the product image for the same product as step 1.
5. Verify that the product page for the same product opens.

### Expected results

- Clicking on either the heading or the product image will open the associated product details page.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-007 — Sort products by names Z to A

| Field             | Details                                          |
| ----------------- | ------------------------------------------------ |
| Priority          | Medium                                           |
| Type              | Functional UI                                    |
| Automation status | Not automated                                    |
| Preconditions     | User is logged in and the inventory page is open |
| Test data         | All displayed products                           |

### Steps

1. Open the product sorting dropdown.
2. Select `Names Z to A`.
3. Review the order of products in the displayed product list.

### Expected results

- The selected sorting option is Names (Z to A).
- Products appear in reverse alphabetical order.
- Test.allTheThings() T-Shirt (Red) appears first.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-008 — Sort prices high to low

| Field             | Details                                          |
| ----------------- | ------------------------------------------------ |
| Priority          | Medium                                           |
| Type              | Functional UI                                    |
| Automation status | Not automated                                    |
| Preconditions     | User is logged in and the inventory page is open |
| Test data         | All displayed products                           |

### Steps

1. Open the product sorting drop down.
2. Select `Prices (High to low).
3. Review the order of products in the displayed product list.

### Expected results

- The selected option is Prices (High to low).
- Products appear in order from highest price to lowest priced.
- Sauce Labs Fleec Jacket appears first.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-009 — Add multiple products

| Field             | Details                                                  |
| ----------------- | -------------------------------------------------------- |
| Priority          | Medium                                                   |
| Type              | Functional UI                                            |
| Automation status | Not automated                                            |
| Preconditions     | User is logged in and the product inventory page is open |
| Test data         | All displayed products                                   |

### Steps

1. Locate the Sauce Labs Bolt T-Shirt product.
1. Click its `Add to cart` button.
1. Verify the product button's updated state.
1. Verify the shopping cart badge.
1. Locate the Sauce Labs Onesie product.
1. Click its `Add to cart` button.
1. Verify the product button's updated state.
1. Verify the shopping cart badge.

### Expected results

- The buttons of both products change from `Add to cart` to `Remove`.
- The shopping cart badge displays `2`.
- The selected products remains visible on the inventory page.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

-

## TC-INV-010 — Add and remove different products

| Field             | Details                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| Priority          | Medium                                                                 |
| Type              | Functional UI                                                          |
| Automation status | Not automated                                                          |
| Preconditions     | User is logged in, product page displayed and no products are in cart. |
| Test data         | All displayed products                                                 |

### Steps

1. Randomly choose one of the six products.
1. Click the `Add to cart` button.
1. Confirm that the button changes to `Remove`.
1. Click the `Remove` button.
1. Confirm that the button changes to `Add to cart`.
1. Repeat these five steps for another randomly chosen product.

### Expected results

- The `Add to cart` button of products changes to `Remove`.
- The `Remove` button of products changes to `Add to cart`.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-011 — Open the shopping cart

| Field             | Details                                           |
| ----------------- | ------------------------------------------------- |
| Priority          | Medium                                            |
| Type              | Functional UI                                     |
| Automation status | Not automated                                     |
| Preconditions     | User is logged in and the product page is visible |
| Test data         | All displayed products                            |

### Steps

1. Click the `Shopping cart` icon.
1. Confirm that the shopping cart page is visible.

### Expected results

- The shopping cart page becomes visible.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-012 — Return from product details

| Field             | Details                                                      |
| ----------------- | ------------------------------------------------------------ |
| Priority          | Medium                                                       |
| Type              | Functional UI                                                |
| Automation status | Not automated                                                |
| Preconditions     | User is logged in and the product inventory page is visible. |
| Test data         | All displayed products                                       |

### Steps

1. Click the heading or image of the Sauce Labs Bike Light product.
1. Confirm that the product details page for the Sauce Labs Bike Light product is visible.
1. Click the `Back to products` link.
1. Confirm that the product inventory page is visible.

### Expected results

- Clicking the `Back to products` link will return the user to the product listing page.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-013 — Open and close the navigation menu

| Field             | Details                                                 |
| ----------------- | ------------------------------------------------------- |
| Priority          | Medium                                                  |
| Type              | Functional UI                                           |
| Automation status | Not automated                                           |
| Preconditions     | User is logged in and product inventory page is visible |
| Test data         | All displayed products                                  |

### Steps

1. Click the `Hamburger` icon.
1. Confirm that navigation menu becomes visible.
1. Click the `X` icon.
1. Confirm that the navigation menu closes.

### Expected results

- Clicking the `Hamburger` icon will open the navigation menu.
- Clicking `X` icon will close the navigation menu.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-014 — Selecting Logout returns the user to the login page.

| Field             | Details                |
| ----------------- | ---------------------- |
| Priority          | Medium                 |
| Type              | Functional UI          |
| Automation status | Not automated          |
| Preconditions     | The user is logged in. |
| Test data         | All displayed products |

### Steps

1. Click the `Hamburger` icon.
1. Click the `Logout` menu item.
1. Confirm that the login page becomes visible.
1. Click the back button on the browser controls.
1. Confirm that the login page remains visible and an error message is shown.

### Expected results

- Clicking the `Logout` button will log the user out.
- The user will not be able to navigate back to the previous page.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

-

## TC-INV-015 — Product images load

| Field             | Details                                                     |
| ----------------- | ----------------------------------------------------------- |
| Priority          | Medium                                                      |
| Type              | Functional UI                                               |
| Automation status | Not automated                                               |
| Preconditions     | User is logged in and the product inventory page is visible |
| Test data         | All displayed products                                      |

### Steps

1. Confirm that the images for each product are visible.

### Expected results

- Each product listing should have a visible image.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

- Product cards are consistently structured

## TC-INV-016 — Name

| Field             | Details                                                     |
| ----------------- | ----------------------------------------------------------- |
| Priority          | Medium                                                      |
| Type              | Functional UI                                               |
| Automation status | Not automated                                               |
| Preconditions     | User is logged in and the product inventory page is visible |
| Test data         | All displayed products                                      |

### Steps

1. Confirm that each product listing contains:
   1. An image
   1. A heading
   1. A descriptive text paragraph
   1. A price
   1. An `Add to cart` button
1. Confirm that the order and layout of the product items is consistent across all products.

### Expected results

- Each product shoul have:
  - An image
  - A heading
  - A descriptive text paragraph
  - A price
  - An `Add to cart` button
- The layout of each of the items of each product should be consistent.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-017 — Prices use the correct format

| Field             | Details                                                     |
| ----------------- | ----------------------------------------------------------- |
| Priority          | Medium                                                      |
| Type              | Functional UI                                               |
| Automation status | Not automated                                               |
| Preconditions     | User is logged in and the product inventory page is visible |
| Test data         | All displayed products                                      |

### Steps

1. Loop through each product on the product inventory page.
1. For each product, confirm that the price text contains, in the following order:
   1. A dollar symbol
   1. A number greater than 0
   1. A full stop
   1. A two numeral number in the range from 00 to 99

### Expected results

- All prices are in the correct format.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-018 — Product page layout is correct for viewport

| Field             | Details                                                     |
| ----------------- | ----------------------------------------------------------- |
| Priority          | Medium                                                      |
| Type              | Functional UI                                               |
| Automation status | Not automated                                               |
| Preconditions     | User is logged in and the product inventory page is visible |
| Test data         | All displayed products                                      |

### Steps

1. Confirm that the sorting controls, cart icon and six products are visible.
1. Confirm that the product listing are centred on the screen.
1. Confirm that when the viewport is resized that the product listings remain centred on the screen and visible.

### Expected results

- All controls are visible.
- No parts of the products is uncentred or not visible when the viewport size is changed.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

## TC-INV-019 — UI can be used via keyboard

| Field             | Details                                                     |
| ----------------- | ----------------------------------------------------------- |
| Priority          | Medium                                                      |
| Type              | Functional UI                                               |
| Automation status | Not automated                                               |
| Preconditions     | User is logged in and the product inventory page is visible |
| Test data         | All displayed products                                      |

### Steps

1. Press the `Tab` key to move between elements on the page.
1. Confirm that the product links, `Add to cart` buttons, `Cart` button, `Hamburger` button and the product sorting dropdown can all be selected via keyboard.
1. Confirm that each of the UI elements can be clicked via the `Enter` key on the keyboard.

### Expected results

- All UI elements should be selectable and clickable via keyboard keys.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None

- Refreshing the inventory page does not cause unexpected errors or inconsistent cart state.

## TC-INV-020 — Refreshing the page doesn't cause errors

| Field             | Details                                                         |
| ----------------- | --------------------------------------------------------------- |
| Priority          | Medium                                                          |
| Type              | Functional UI                                                   |
| Automation status | Not automated                                                   |
| Preconditions     | The user is logged in and the product inventory page is visible |
| Test data         | All displayed products                                          |

### Steps

1. Click the `Add to cart` button of the Sauce Labs Backpack item.
1. Confirm that the cart logo shows a `1` number.
1. Refresh the page.
1. Confirm that the page reloads in the same state as before the refresh, including:
   1. Cart with 1 product added.
   1. `Remove` button still visible for the Sauce Labs Backpack item.

### Expected results

- The product inventory page will reload in the same state when refreshed.

### Execution record

- **Last executed:** Not yet executed
- **Result:** Not run
- **Defect reference:** None
