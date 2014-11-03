(function(){
  var app = angular.module('hangman' , []);
  
  app.controller('DictionaryController', [ '$scope', '$http', function($scope, $http) {

    $scope.wordCollection = [];
    
    $http.get('js/us_states.json').success(function(wordCollection){
      $scope.wordCollection = wordCollection;
    });
    
    $scope.selectWord = function(wordCollection) {
      totalWords = 0;
      
      // count total words in collection
      Object.keys(wordCollection).forEach(function(){
        totalWords++;
      });
      
      // select a ramdom word from the collection and return it
      wordIndex = Math.floor( ( Math.random() * totalWords ) );
      selectedWord = wordCollection[wordIndex];
      
      return selectedWord;
    }
  }]);
})();
