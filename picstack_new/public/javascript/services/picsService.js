/*
angular.module('app').service('picsService', ['$http', function($http) {
	return {

		get: function() {
            $http.get('/api/pics')
                .success(function(response) {
                    //console.log(response);
                    return response;
            });
			//return $http.get('/pics');
		},

		create: function(picData) {
			return $http.post('/api/pics', picData);
		},

		delete: function(id) {
			return $http.delete('/api/pics/' + id);
		}
	}
}]);
*/