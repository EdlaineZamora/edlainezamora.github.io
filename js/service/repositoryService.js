/**
 * Created by Edlaine on 27/12/16.
 */
var app = angular.module('site');

app.service('RepositoryService', function($http) {

    this.getAllRepositories = function () {
        return $http.get('https://api.github.com/users/edlainezamora/repos?sort=pushed&direction=desc');
    }

});
