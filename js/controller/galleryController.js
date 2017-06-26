var app = angular.module('site');

app.controller('GalleryController', function($scope) {

    $scope.events = [
        {image: 'images/treinamentos/node-girls-11-06.jpg',
            title: 'Participação como Treinadora no evento Node Girls em Belo Horizonte - 11/06/2017',
            descryption: 'O evento tem como objetivo ensinar mulheres que tiveram ou não acesso a tecnologia.'},

        {image: 'images/treinamentos/django-girls-27-05.jpg',
            title: 'Participação como Treinadora no evento Django Girls em Belo Horizonte - 27/05/2017',
            descryption: 'O evento tem como objetivo ensinar mulheres que tiveram ou não acesso a tecnologia.'},

        {image: 'images/treinamentos/django-girls-treinadora-27-05.jpg',
            title: 'Participação como Treinadora no evento Django Girls em Belo Horizonte - 27/05/2017',
            descryption: 'O evento tem como objetivo ensinar mulheres que tiveram ou não acesso a tecnologia.'},

        {image: 'images/treinamentos/tdc-floripa-2017-jhipster.jpg',
            title: 'Palestra Realizada no The Developers Conference - 06/05/2017',
            descryption: 'Palestra realizada sobre o gerador de código JHipster na trilha de Java.'},

        {image: 'images/treinamentos/tdc-floripa-2017-performance.jpg',
            title: 'Palestra Realizada no The Developers Conference - 05/05/2017',
            descryption: 'Palestra realizada sobre Testes de Performance na trilha de Testes.'},

        {image: 'images/treinamentos/tdc-floripa-2017-testes-performance.jpg',
            title: 'Palestra Realizada no The Developers Conference - 05/05/2017',
            descryption: 'Palestra realizada sobre Testes de Performance na trilha de Testes.'},

        {image: 'images/treinamentos/palestra-qa-ninja-conference-24-04.jpg',
            title: 'Palestra Realizada no QA Ninja Conference - Evento online e gratuito - 24/02/2017',
            descryption: 'Palestra realizada sobre como analisar vulnerabilidades de uma aplicação web com Kali Linux.'},

        {image: 'images/treinamentos/hackathon-hotmart-camila-achutti.jpg',
            title: 'Participação especial de Camila Achutti no Hackathon da Empresa Hotmart em Belo Horizonte - 01/04-2017',
            descryption: 'Influente em igualdade de gêneros no mercado da tecnologia da informação, ela está à frente do Mastertech e Mulheres na Computação.'},

        {image: 'images/treinamentos/hackathon-hotmart-01-04.jpg',
            title: 'Hackathon da Empresa Hotmart em Belo Horizonte - 01/04-2017',
            descryption: 'Participação no Hackathon da Hotmart. O evento tinha como objetivo a construção colaborativa de uma aplicação que ajuda na inclusão de mulheres em empresas de TI.'},

        {image: 'images/treinamentos/devgirls-palestra-sobre-microsoft-xamarin-18-02.jpg',
            title: 'Palestra Realizada no DevGirls - Evento só para mulheres de TI',
            descryption: 'Palestra realizada sobre como criar aplicativos nativos com Microsoft Xamarin.'},

        {image: 'images/treinamentos/devgirls-18-02.jpg',
            title: 'Evento só para mulheres de TI - 18/02/2017',
            descryption: 'Evento que participei da Organização. Um Meetup só para mulheres da área de TI: DevGirls'},

        {image: 'images/treinamentos/conversa-sobre-metodologia-agil-21-01.jpg',
            title: 'Conversa sobre Manifesto Ágil',
            descryption: 'Um grupo se juntou na praça para conversar sobre o manifesto ágil.'},

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

        {image: 'images/treinamentos/hackathon-unimed.JPG',
            title: 'Hackathon da Unimed',
            descryption: 'Desenvolvimento de um aplicativo para melhorar a comunicação do cliente com a Unimed.'},

        {image: 'images/treinamentos/jhipster.JPG',
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
