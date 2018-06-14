//──── / feedreader.js ────────────────────────────────────────────────────────────────── 
//========================================================================================
/*                                                                                      *
 *               This is the spec file that Jasmine will read and contains              *
 *              all of the tests that will be run against your application.             *
 *                                                                                      */
//========================================================================================
//========================================================================================
/*                                                                                      *
 *              since some of these tests may require DOM elements. We want             *
 *                   to ensure they don't run until the DOM is ready.                   *
 *                                                                                      */
//========================================================================================
$(function() {

    let feedStarts;
    let feedEnds;

    //this is our first test 
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Write a test that loops through each feed (url)
        it('urls defined', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        //Write a test that loops through each feed (name)
        it('names defined', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    // Write a new test suite named "The menu"
    describe('The menu', function(){

        // Write a test that ensures the menu element is hidden by default.
        it('menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        //write a test that ensures the menu changes visibility when the menu is clicked
        it('menu changes the visibility when is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden').toBe(true));
        }); 
    });      

    // Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        //write a test when the loadFee is called and works
        beforeEach(function (done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('define if there is more than 0 entries', function(){
            expect($('.entry .feed')).toBeDefined();
        });
    });   

    //Write a new test suite named "New Feed Selection"
    describe('New Feed Selection', function(){
        
        //test ensures when a new feed is loaded
       beforeEach(function (done) {
           $('.feed').empty();
           loadFeed(0, function () {
               feedStarts = $('.feed').find(allFeeds.url);
               done();
           });
           loadFeed(1, function() {
               feedEnds = $('.feed').find(allFeeds.url);
               done();
           });
        });
        it('feed are not equal', function() {
           expect(feedStarts).not.toEqual(feedEnds);
        }); 
    });       
}());
