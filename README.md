# Project Overview--Testing with Jasmine

In this project a web-based application reads RSS feeds, and Jasmine is used to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

# Project Details

Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works. The Jasmine spec file is in *./jasmine/spec/feedreader.js*. The allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in the application.

Download jQuery and jasmine-jquery. The latter provides two extensions for the Jasmine JavaScript Testing Framework:

1. a set of custom matchers for jQuery framework.
2. an API for handling HTML, CSS, and JSON fixtures in your specs.

Save these files in the *./js directory.

# The Tests

1. First test - it tests to make sure that the allFeeds variable has been defined and that it is not empty.

Double-click the index.html file to see Jasmine working.

2. Test by changing allFeeds in app.js to be an empty array and refresh the page. The test should fail.

3. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty

4. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

5. A new test suite named "The menu". A test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

6. A test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

7. A new test suite named "Initial Entries". A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. The loadFeed() is asynchronous so this test will require the use of Jasmine's beforeEach and asynchronous done() function.

8. A new test suite named "New Feed Selection". A test that ensures when a new feed is loaded
by the loadFeed function that the content actually changes. 

9. Test if CSS menu-hidden property works if CSS is removed.

10. Test for 'feed-list' class.

11. Test for 'entry-link' class.

# Resources

The best resources for Jasmine I found are:
1. The Official Documentation. http://jasmine.github.io/
2. How do I Jasmine: a tutorial? http://evanhahn.com/how-do-i-jasmine/
3. Testing JavaScript Using the Jasmine Framework. http://www.htmlgoodies.com/beyond/javascript/testing-javascript-using-the-jasmine-framework.html
4. Udacity Jasmine Course.