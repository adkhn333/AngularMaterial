describe('hello, protractor', function () {
    describe('index', function () {
        browser.get('/');
        it('should have a title', function () {
            expect(browser.getTitle()).toBe('Material2');
        });
    });
});
//# sourceMappingURL=index.e2e.js.map