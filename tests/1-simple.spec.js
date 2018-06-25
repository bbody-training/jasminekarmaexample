describe("simpleReturn", function(){
	it("should handle postive numbers", function(){
		var result = simpleReturn(1, 1);
		expect(result).toBe(-1);
	});
	it("should handle negative numbers", function(){
		var result = simpleReturn(-1, -1);
		expect(result).toBe(3);
	});
});