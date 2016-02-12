app.controller("NavController", ["$http", "$scope", function($http, $scope) {
	$scope.pages = [];
	$scope.navCollapsed = true;

	$scope.getPages = function() {
		$http.get("navmap.json")
			.then(function(reply) {
				if(reply.status === 200) {
					$scope.pages = reply.data.pages;
				}
			});
	};

	if($scope.pages.length === 0) {
		$scope.getPages();
	}
}]);