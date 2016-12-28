/**
 * Created by Edlaine on 27/12/16.
 */
var app = angular.module('site');

app.controller('GalleryController', function($scope) {

    $scope.events = [
        {image: 'images/treinamentos/devgirls-anúncio.jpg',
            title: 'Evento só para mulheres de TI',
            descryption: 'Organização de um Meetup só para mulheres da área de TI: DevGirls'},

        {image: 'images/treinamentos/curso-jmeter-realizacao.jpg',
            title: 'Realização de curso',
            descryption: 'Ministrado o curso de Testes de Performance com JMeter na FCV-Maringá'},

        {image: 'images/treinamentos/dev-paraná-conference-maujor.jpg',
            title: 'DevParaná Conference 2016',
            descryption: 'Maurício Samy Silva: Maujor, o dinossauro das CSS'},

        {image: 'images/treinamentos/dev-paraná-conference-9.jpg',
            title: 'DevParaná Conference 2016',
            descryption: 'Microserviços'},

        {image: 'images/treinamentos/dev-paraná-conference-8.jpg',
            title: 'DevParaná Conference 2016',
            descryption: 'CSS'},

        {image: 'images/treinamentos/dev-paraná-conference-7.jpg',
            title: 'DevParaná Conference 2016',
            descryption: 'Progressive WebApps'},

        {image: 'images/treinamentos/dev-paraná-conference-6.jpg',
            title: 'DevParaná Conference 2016',
            descryption: 'ReactJs'},

        {image: 'images/treinamentos/dev-paraná-conference-5.jpg',
            title: 'DevParaná Conference 2016',
            descryption: 'Desenvolvimento Híbrido para mobile e desktop'},

        {image: 'images/treinamentos/dev-paraná-conference-4.jpg',
            title: 'DevParaná Conference 2016',
            descryption: 'Como ser um bom dev front-end em 2017'},

        {image: 'images/treinamentos/dev-paraná-conference-3.jpg',
            title: 'DevParaná Conference 2016',
            descryption: 'Entidades persistentes inteligentes: DDD e JPA'},

        {image: 'images/treinamentos/dev-paraná-conference-2.jpg',
            title: 'DevParaná Conference 2016',
            descryption: 'DevOps e Containers'},

        {image: 'images/treinamentos/dev-paraná-conference-1.jpg',
            title: 'DevParaná Conference 2016',
            descryption: 'DevOps e Containers'},

        {image: 'images/treinamentos/hackathon-db1.jpg',
            title: 'Hackathon de arduíno na DB1',
            descryption: 'Desenvolvimento de um brinquedo educativo para o dia das crianças.'},

        {image: 'images/treinamentos/hackathon-unimed.jpg',
            title: 'Hackathon da Unimed',
            descryption: 'Desenvolvimento de um aplicativo para melhorar a comunicação do cliente com a Unimed.'},

        {image: 'images/treinamentos/jhipster.jpg',
            title: 'Realização de Palestra na DB1',
            descryption: 'Palestra: Desenvolvendo aplicações web com JHipster.'},

        {image: 'images/treinamentos/palestra-tdc.jpg',
            title: 'Realização de Palestra no TDC-SP 2016',
            descryption: 'Palestra: Tomada de decisão baseada em testes de carga.'},

        {image: 'images/treinamentos/sala-palestrante-tdc.jpg',
            title: 'Sala de Palestrante - TDC-SP 2016',
            descryption: 'Palestra: Tomada de decisão baseada em testes de carga.'},

        {image: 'images/treinamentos/anúncio-palestra-tdc-2016.jpg',
            title: 'Anúncio de Palestra no TDC-SP 2016',
            descryption: 'Palestra: Tomada de decisão baseada em testes de carga.'},

        {image: 'images/treinamentos/arquitetura-nas-nuvens.jpg',
         title: 'Participação em treinamento',
         descryption: 'Treinamento de Arquitetura nas nuvens na DB1.'},

        {image: 'images/treinamentos/metodologias-ágeis.jpg',
            title: 'Participação em treinamento',
            descryption: 'Treinamento sobre Metodologias Ágeis.'},

        {image: 'images/treinamentos/nodejs.jpg',
            title: 'Participação em treinamento',
            descryption: 'Treinamento sobre NodeJs realizado na DB1.'},

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