describe('ajax', function() {
	beforeEach(function() {
		jasmine.Ajax.install();
	});

	afterEach(function() {
		jasmine.Ajax.uninstall();
	});

	it('gets calls', function() {
		spyOn(jQuery, 'ajax');
		getEmergencyNumber();
		expect(jQuery.ajax).toHaveBeenCalled();
	});

	describe('remote calls', function() {
		beforeEach(function() {
			spyOn(console, 'log');
			window.numbers = [];
			getEmergencyNumber();

			var request = jasmine.Ajax.requests.mostRecent();
			var response = {
				"status": 200,
				responseText: JSON.stringify({"USA": "911"})
			}

			request.respondWith(response);
		});

		it('it gets successfully called', function() {
			expect(console.log).toHaveBeenCalled();
			expect(console.log).toHaveBeenCalledWith('success');
		});

		it('it gets successfully called', function() {
			expect(window.numbers.length).toBe(1);
			expect(window.numbers[0]).toEqual({"USA": "911"});
		});
	});
});