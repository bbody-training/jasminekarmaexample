describe("remote calls", function() {
	beforeEach(function(){
		jasmine.Ajax.install();
	});
	afterEach(function(){
		jasmine.Ajax.uninstall();
	});

	it("gets called", function(){
		spyOn(jQuery, 'ajax');
    	getEmergencyNumbers();
    	expect(jQuery.ajax).toHaveBeenCalled();
	});

	it("it successfully calls", function(){
		spyOn(console, "log");
		getEmergencyNumbers();

        var request = jasmine.Ajax.requests.mostRecent();
        var response = {
        	"status": 200,
        	responseText: JSON.stringify({"Australia": "000"})
        };

        request.respondWith(response);
        expect(console.log).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith("SUCCESS");
        expect(request.url).toBe('https://raw.githubusercontent.com/bbody/Emergency-Numbers/master/countries.json');
        expect(request.method).toBe('GET');
        expect(request.status).toBe(200);
        expect(window.numbers).toEqual({"Australia": "000"});
	});
});