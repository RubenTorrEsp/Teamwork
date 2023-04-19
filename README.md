## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#collaboration)
5. [FAQs](#faqs)

### General Info
***
Test project of the website "Teamwork.com"

## Technologies
***
* [JavaScript] (https://developer.mozilla.org/es/docs/Web/JavaScript)
* [Playwright] (https://playwright.dev/)
* [PlaywrightTest] (https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
* [npm] (https://www.npmjs.com/)

## Installation
***
To install the project, the easiest way is to clone it directly from the github page in Visual Studio Code along with npm. To do this, we open a new terminal within the editor and we will write the following lines.
```
$ git clone https://github.com/RubenTorrEsp/Teamwork
$ cd ../teamwork
$ npm install
$ npm start
```

## Execution
***
There are 2 ways to run the tests. The project is already prepared and with the dependencies and libraries configured. In a first form, the tests would be executed in the background. To do this, we write the following code in the terminal:
```
npx playwright test
```
Once the tests are completed, we can open a report with the results of these tests with the code
```
npx playwright show-report

Another way to run the tests visually and even showing the browser is by downloading the 'Playwright Test for VSCode' extension from Microsoft. Once the extension is downloaded, you will see a flask-shaped icon in the vertical menu. If we enter the extension, we will see all the tests created. There we can run them one by one, by blocks (files) or all at once, clicking on the play button (Run test) in each row.