describe("Environment Control", function(){
	describe("Simple Environment", function(){
		beforeEach(function(){
			spyOn(window, 'getUrl').and.returnValue("https://www.google.com/");
			// Control Random
			spyOn(Math, 'random').and.returnValue(50);
		});

		it("returns correct url", function(){
			expect(cacheBreak()).toBe("https://www.google.com/?5001");
		});
	});

	describe("Simple Environment", function(){
		var name = "";
		beforeEach(function(){
			name = APP_NAME;
			APP_NAME = "APP";
		});

		afterEach(function(){
			APP_NAME = name;
		});

		it("Returns app name", function(){
			expect(appName()).toBe("APP");
		});
	});
});