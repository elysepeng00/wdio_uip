describe('Input Component', function() {
    it('should be able to open input component page', function () {
        browser.url('/components/veeva-input/');

        var title = browser.getTitle();
        expect(title).toEqual('Corgix: Veeva\'s UI Platform');
        browser.saveScreenshot('input-page.png');
        console.log('Title is :' + title );
    });
});