<div align="center">

# Playwright Demo
 An example repository showing some of the features of Playwright.<br><br>
Tried to make a sample test plan with automation ussing demo site [saucedemo.com](https://www.saucedemo.com)<br><br>
 
![Tests](https://github.com/piotrzalejski/playwright-demo/actions/workflows/playwright.yml/badge.svg?event=push&branch=main)

gh-pages:


[![GitHub last commit](https://img.shields.io/github/last-commit/piotrzalejski/playwright-demo/gh-pages)](https://GitHub.com/piotrzalejski/playwright-demo/commit/gh-pages)


 ## Test Resluts:
 When the below tests are finished, results are published to:

 [Test Results](https://piotrzalejski.github.io/playwright-demo/)

</div>


## Login Tests

| Test Case | Automated? | Pass? |
|:------------|:--------------------:|:---:|
| Verify Page Content |✔️|✔️|
| Empty Username & Password |✔️|✔️|
| Empty Username |✔️|✔️|
| Empty Password |✔️|✔️|
| Bad Username & Password |✔️|✔️|
| Bad Username |✔️|✔️|
| Bad Password |✔️|✔️|
| Valid Login |✔️|✔️|
  
## Product Page

| Test Case | Automated? | Pass? |
|:------------|:--------------------:|:---:|
| Verify number of products > 0 |✔️|✔️|
| Validate product info displayed in a tile: title, desc, price, ATC |✔️|✔️|
| Sort A-Z |✔️|✔️|
| Sort Z-A |✔️|✔️|
| Price High - Low |✔️|✔️|
| Price Low - high |✔️|✔️|
| Price Low - high |✔️|✔️|
| Specific Product Detail Page: title, desc, price, ATC|✔️|✔️|
| Add to Cart|✔️|✔️|
| Remove from Cart |✔️|✔️|

## Hamburger Menu

| Test Case | Automated? | Pass? |
|:------------|:--------------------:|:---:|
| Verify all items present |✔️|✔️|
| Navigate to All Items |✔️|✔️|
| Navigate to About |✔️|✔️|
| Navigate to Logout |✔️|✔️|
| Navigate to Reset App State |skipped|skipped|

## Cart

| Test Case | Automated? | Pass? |
|:------------|:--------------------:|:---:|
| Verify Contents: QTY, Desc, Continue Shopping, Checkout, Cancel, Etc. |✔️|✔️|
| Add to Cart |✔️|✔️|
| Checkout: no Fname, Lname, Zip|✔️|✔️|
| Checkout: Valid data |✔️|✔️|
| Checkout: Overview Cancel|✔️|✔️|
| Checkout: Overview Finish|✔️|✔️|
