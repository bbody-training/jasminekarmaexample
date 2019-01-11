describe('environmental controls', function() {
	beforeAll(function() {
		this.SITE = "https://www.google.com";
	});

	beforeEach(function() {
		spyOn(window, 'getCurrentUrl').and.returnValue(this.SITE);
		spyOn(Math, 'random').and.returnValue(0.5);
	});

	it('hands back the current url with query string', function() {
		expect(getCacheBrokenUrl()).toContain("?");
		expect(getCacheBrokenUrl()).toContain(this.SITE + "?");
	});

	it('hands back the current url with random number', function() {
		expect(getCacheBrokenUrl()).toContain("?");
		expect(getCacheBrokenUrl()).toBe(this.SITE + "?51");
	});	
});