var myapp = angular.module('myapp', ['ui']);

myapp.controller('IdeaCtrl', function ($scope,lightBox){
	$scope.userName = 'Ankita';
	$scope.lightbox = lightBox;
	$scope.ideas = [{id: 0 ,text: "Idea 1" , votes: 1},
					{id: 1 ,text: "Idea 2" , votes: 0},
					{id: 2 ,text: "Idea 3" , votes: 0}];

	
	$scope.removeText = function(){
		$scope.FormIdeaText = '';
	}
	
	$scope.addIdea = function(){
		newId = $scope.ideas.length;
		$scope.ideas.push({id: newId , text: $scope.FormIdeaText , votes:0});
		$scope.FormIdeaText = '';
	}
	
	$scope.voteUp = function(element){
		element.votes = element.votes + 1;
	}

	$scope.editCard = function(element){
		$scope.edittedIdeaText = "";
		lightBox.ideaForm.on = true;
		lightBox.ideaForm.id = element.id;
			
	}
	$scope.updateIdeaText = function(){
		newText = $scope.edittedIdeaText;
		ideaId = lightBox.ideaForm.id;
		$scope.ideas[ideaId].text = newText;
		lightBox.ideaForm.on = false;
	}
});

myapp.factory('lightBox', function () {
    return {
        ideaForm: {
            on: false,
            id: 0
        },
        close: function (boxName) {
            this[boxName].on = false;
        }
    };
});

angular.bootstrap(document, ['myapp']);
