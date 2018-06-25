describe("Simple Return", function() {
    beforeEach(function() {
        jasmine.Ajax.install();
        spyOn(console, 'log');
    });

    afterEach(function() {
        jasmine.Ajax.uninstall();
    });

    it("It calls remote endpoint", function(){
    	spyOn(jQuery, 'ajax');
    	getEmergencyNumbers();
    	expect(jQuery.ajax).toHaveBeenCalled();
    });

    it("Returns value", function() {
    	getEmergencyNumbers();

        var request = jasmine.Ajax.requests.mostRecent();
        var response = {
        	"status": 200,
        	responseText: JSON.stringify({"Australia": "000"})
        };
        request.respondWith(response);
        expect(request.url).toBe('https://raw.githubusercontent.com/bbody/Emergency-Numbers/master/countries.json');
        expect(request.method).toBe('GET');
        expect(numbers).toEqual({"Australia": "000"});
        expect(console.log).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith('SUCCESS');
    });
});