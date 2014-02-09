var quote = angular.module('quote', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all todos and show them
	$http.get('/api/quote')
		.success(function(data) {
			$scope.quotes = data;
			var quote = randomQuote(data);
			quote.data = new Date(quote.data).toLocaleString()
			$scope.quote = quote;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});


	function randomQuote(totalQuote){
		var rand = Math.floor((Math.random()*totalQuote.length));
		return totalQuote[rand];
	}
}
