/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('URL is defined', function() {
          allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
          });
        });

        it('URL is not empty', function() {
          allFeeds.forEach(function(feed) {
             expect(feed.url).not.toBe(null);
          });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name is defined', function() {
          allFeeds.forEach(function(name) {
             expect(name).toBeDefined();
          });
        });

        it('name is not empty', function() {
          allFeeds.forEach(function(name) {
             expect(name).not.toBe(null);
          });
        });

    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

    describe('The Menu', function() {
        it('body has menu-hidden class', function() {
            expect($('body')).toHaveClass('menu-hidden');
        });
    });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries', function() {
        beforeEach(function(done) {
                loadfeed(0); //Load the first feed we've defined (index of 0). See app.js.
                done(); //The done() function is always passed to the beforeEach(), afterEach(), and it() test methods as an argument, whether you need it or not. To use it, include the done argument to the method and the call it after all of the processing is complete.
            it('Single .entry exists in .feed container', function() {
                expect($('.entry')).not.toBe(null);
            });           
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    describe('New Feed Selection', function() {
        beforeEach(function(done) {
               // var a = loadfeed(0); 
               // var b = loadfeed(1);
               loadfeed(0);
               loadfeed(1);
                done(); //The done() function is always passed to the beforeEach(), afterEach(), and it() test methods as an argument, whether you need it or not. To use it, include the done argument to the method and the call it after all of the processing is complete.
            it('Content in loadfeed actually changed', function() {
                expect(loadfeed(0)).not.toEqual(loadfeed(1));
            });           
        });
    });

    /*
    Other tests.
    */


}());