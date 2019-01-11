function simpleFunction(a, b) {
	if (typeof a === "undefined" || typeof b === "undefined") {
		return 0;
	}
	return (a * b) - (a + b);
}