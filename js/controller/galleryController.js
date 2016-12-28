/**
 * Created by Edlaine on 27/12/16.
 */
var app = angular.module('site');

app.controller('GalleryController', function($scope) {

    $scope.events = [
        {image: 'images/treinamentos/arquitetura-nas-nuvens.jpg',
         title: 'Participação em treinamento',
         descryption: 'Treinamento de Arquitetura nas nuvens realizado na DB1.'},

        {image: 'images/treinamentos/gumga.jpg',
            title: 'Participação em treinamento',
            descryption: 'Treinamento sobre Framework Gumga realizado na DB1.'},

        {image: 'images/treinamentos/css.jpg',
            title: 'Participação em treinamento',
            descryption: 'Treinamento sobre CSS Além do Básico realizado na DB1.'},

        {image: 'images/treinamentos/express.jpg',
            title: 'Participação em treinamento',
            descryption: 'Treinamento sobre Express realizado na DB1.'},

        {image: 'images/treinamentos/angular.jpg',
            title: 'Participação em treinamento',
            descryption: 'Treinamento sobre AngularJS realizado na DB1.'},

        {image: 'images/treinamentos/prototipacaoJS.jpg',
            title: 'Participação em treinamento',
            descryption: 'Treinamento sobre Prototipação em JavaScript realizado no Sicoob.'},

        {image: 'images/treinamentos/expressionLanguage3.jpg',
            title: 'Participação em treinamento',
            descryption: 'Treinamento sobre Expression Language 3 realizado na DB1.'}
    ];


});
