# Playwright Demo

 An example repository showing some of the features of Playwright

 ## Test Resluts:
 When the below tests are finished, results are published to:

 [Test Results](https://piotrzalejski.github.io/playwright-demo/)


 ![Tests](https://github.com/piotrzalejski/playwright-demo/actions/workflows/playwright.yml/badge.svg)

## Login Tests

| Test Case | Automated? | Pass/ Fail |
|:------------|:--------------------:|:---:|
| Verify Page Content |✅|✅|
| Empty Username & Password |✅|✅|
| Empty Username |✅|✅|
| Empty Password |✅|✅|
| Bad Username & Password |✅|✅|
| Bad Username |✅|✅|
| Bad Password |✅|✅|
| Valid Login |✅|✅|
  
## Product Page

| Test Case | Automated? | Pass/ Fail |
|:------------|:--------------------:|:---:|
| Verify number of products > 0 |x|x|
| Validate product: title, desc, price, ATC |x|x|
| Sort A-Z |x|x|
| Sort Z-A |x|x|
| Price High - Low |x|x|
| Price Low - high |x|x|
| Price Low - high |x|x|
| Product Detail Page: title, desc, price, ATC|x|x|
| Add to Cart |x|x|
| Remove from Cart |x|x|

## Hamburger Menu

| Test Case | Automated? | Pass/ Fail |
|:------------|:--------------------:|:---:|
| Verify all items present |x|x|
| Navigate to All Items |x|x|
| Navigate to About |x|x|
| Navigate to Logout |x|x|
| Navigate to Reset App State |x|x|

## Cart

| Test Case | Automated? | Pass/ Fail |
|:------------|:--------------------:|:---:|
| Verify Contents: QTY, Desc, Continue Shopping, Checkout |x|x|
| Add to Cart |x|x|
| Checkout: no Fname, Lname, Zip|x|x|
| Checkout: Valid data |x|x|
| Checkout: Overview Cancel|x|x|
| Checkout: Overview Finish|x|x|