/**
 * Created by Edlaine on 27/12/16.
 */
var app = angular.module('site');

app.directive('experienceRow', function () {

    return {
        restrict: 'E',
        templateUrl: 'js/template/experience-row.html',
        scope : {
            companyName: '@',
            functionName: '@',
            image: '@'

        }
    }

});
