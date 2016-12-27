/**
 * Created by Edlaine on 27/12/16.
 */
var app = angular.module('site');

app.controller('RepositoryController', function($scope, RepositoryService) {

    (function getAllRepositories() {
        RepositoryService.getAllRepositories()
            .then(function (result) {
                $scope.msg = result.data.length + " repositórios existentes";
                $scope.repositorios = result.data;
            }, function () {
                $scope.msg = "Não foi possível carregar os repositórios";
            })
    })();

});