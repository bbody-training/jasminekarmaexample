String.prototype.beginsWith = function(str){
	return this.indexOf(str) === 0;
};

describe("environment control", function(){
	describe("cache breaker", function(){
		beforeAll(function(){
			this.SITE = 'https://www.bonds.com.au/';
		});

		beforeEach(function(){
			spyOn(window, 'getUrl').and.returnValue(this.SITE);
			spyOn(Math, 'random').and.returnValue(50);
			this.url = cacheBreak();
		});

		it("should contain query operator", function(){
			expect(this.url).toContain("?");
		});
		it("should not contain hash", function(){
			expect(this.url).not.toContain("#");
		});

		it("should contain url", function(){
			expect(this.url.beginsWith(this.SITE)).toBe(true);
		});

		it("should have a random number", function(){
			expect(this.url).toBe(`${this.SITE}?5001`);
		});
	});

});