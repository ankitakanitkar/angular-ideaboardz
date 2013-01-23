var myapp = angular.module('myapp', ['ui']);

myapp.controller('IdeaCtrl', function ($scope){
	$scope.userName = 'Subuanks';
	$scope.ideas = [{id: 0 ,text: "Idea 1" , votes: 1},{id: 1 ,text : "Idea2" , votes: 0},{id: 2 ,text: "Idea3" , votes: 0}];
	
	$scope.removeText = function(){
		$scope.FormIdeaText = '';
	}
	
	$scope.addIdea = function(){
		$scope.ideas.push({text: $scope.FormIdeaText , votes:0});
		$scope.FormIdeaText = '';
	}
	
	$scope.voteUp = function(element){
		$scope.ideas[element.id].votes = element.votes + 1;
	}
});

angular.bootstrap(document, ['myapp']);
