app.directive("bootstrapBreakpoint", ["$window", function($window) {
	var breakpoints = {
		"xs": "<div id=\"bootstrap-breakpoint-xs\" class=\"device-xs visible-xs visible-xs-block\"></div>",
		"sm": "<div id=\"bootstrap-breakpoint-sm\" class=\"device-sm visible-sm visible-sm-block\"></div>",
		"md": "<div id=\"bootstrap-breakpoint-md\" class=\"device-md visible-md visible-md-block\"></div>",
		"lg": "<div id=\"bootstrap-breakpoint-lg\" class=\"device-lg visible-lg visible-lg-block\"></div>"
	};
	return({
		link: link,
		restrict: "E",
		template: breakpoints.xs + breakpoints.sm + breakpoints.md + breakpoints.lg
	});
	function link(scope, element, attributes) {
		scope.detectBreakpoint = function() {
			console.log("detecting detected");
		};
		angular.element($window).bind("resize", function() {
			$scope.bootstrapBreakpoint = $scope.detectBreakpoint();
		});
	}
}]);