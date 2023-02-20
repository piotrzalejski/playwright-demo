<div align="center">

# Playwright Demo Test
 An example repository showing some of the features of Playwright
 
![Tests](https://github.com/piotrzalejski/playwright-demo/actions/workflows/playwright.yml/badge.svg?event=push&branch=main)

gh-pages:


[![GitHub last commit](https://img.shields.io/github/last-commit/piotrzalejski/playwright-demo/gh-pages)](https://GitHub.com/piotrzalejski/playwright-demo/commit/gh-pages)

</div>

 ## Test Resluts:
 When the below tests are finished, results are published to:

 [Test Results](https://piotrzalejski.github.io/playwright-demo/)



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
| Verify number of products > 0 |✅|✅|
| Validate product info displayed in a tile: title, desc, price, ATC |✅|✅|
| Sort A-Z |✅|✅|
| Sort Z-A |✅|✅|
| Price High - Low |✅|✅|
| Price Low - high |✅|✅|
| Price Low - high |✅|✅|
| Specific Product Detail Page: title, desc, price, ATC|✅|✅|
| Add to Cart |✅|✅|
| Remove from Cart |✅|✅|

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