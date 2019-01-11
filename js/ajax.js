window.numbers = [];

function getEmergencyNumber() {
	jQuery.ajax({url: "https://www.google.com/", success: function(data) {
		window.numbers.push(data);
		console.log("success");
	}})
}