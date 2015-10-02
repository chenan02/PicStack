/*angular.module('app').controller('HomeController', ['$scope', 'picsService', function($scope, picsService) {
        $scope.pics = picsService.get();
        console.log($scope.pics);
}]);
*/

angular.module('app').controller('HomeController', function($scope, $http) {
        $http.get('/api/pics')
            .success(function(response) {
                console.log(response);
                $scope.pics = response;
            });
        $scope.upvote = function(id) {
            $http.put('/api/pics/' + id + '/upvote');
            console.log(id);
                //.success(function() {
                  //  $scope.
        };
        $scope.downvote = function(id) {
            $http.put('/api/pics/' + id + '/downvote');
            console.log(id);
        };
});
