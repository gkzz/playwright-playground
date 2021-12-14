//ref
//https://playwright.dev/docs/test-fixtures#test-fixtures
// hello.js
const base = require('@playwright/test');

// Extend base test with fixtures "hello" and "helloWorld".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
module.exports = base.test.extend({
    // This fixture is a constant, so we can just provide the value.
    hello: 'Hello',

    // This fixture has some complex logic and is defined with a function.
    helloWorld: async ({ hello }, use) => {
        // Set up the fixture.
        const value = hello + ', world!';

        // Use the fixture value in the test.
        await use(value);

        // Clean up the fixture. Nothing to cleanup in this example.
    },
});