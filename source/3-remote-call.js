window.numbers = {};
function getEmergencyNumbers(){
	var url = "https://raw.githubusercontent.com/bbody/Emergency-Numbers/master/countries.json";
	jQuery.ajax({url: url, success: function(data){
		window.numbers = data;
		console.log('SUCCESS');
	}});
}