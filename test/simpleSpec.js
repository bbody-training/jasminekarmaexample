describe('simple function', function() {
	it('handles positive numbers', function() {
		expect(simpleFunction(1, 1)).toBe(-1);
	});

	it('handles negative numbers', function() {
		expect(simpleFunction(-1, -1)).toBe(3);
	});

	it('handles zero values', function() {
		expect(simpleFunction(0, 0)).toBe(0);
	});

	it('handles undefined variables', function() {
		expect(simpleFunction()).toBe(0);
	});
});