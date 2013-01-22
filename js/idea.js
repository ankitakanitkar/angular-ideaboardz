var myapp = angular.module('myapp', ['ui']);

myapp.controller('IdeaCtrl', function ($scope){
	$scope.userName = 'Subuanks';
	$scope.ideas = [{text: "Idea 1" , done: false},{text : "Idea2" , done: false},{text: "Idea3" , done: false}];
	
	$scope.removeText = function(){
		$scope.FormIdeaText = '';
	}
	
	$scope.addIdea = function(){
		$scope.ideas.push({text: $scope.FormIdeaText , done:false});
		$scope.FormIdeaText = '';
	}
});

angular.bootstrap(document, ['myapp']);
