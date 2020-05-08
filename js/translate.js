/*------------------------
Angular App and Translator
--------------------------*/
var app = angular.module('client-app', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('EN', {
      'HOME' : 'Home',
      'ABOUT' : 'About',
      'PORTFOLIO' : 'Portfolio',
      'CONTACT' : 'Contact',
      'WELCOME' : 'Welcome',
      'ABOUT_MORE' : 'Hi! I am Ilyes Bouchada, a student at Tokyo University of Electro-Communication. I work as a part-time software engineer and system adiministrator at MeanSquared Inc. ...To be continued',
      'PORTFOLIO_MORE' : 'Here are some Projects I worked on..',
      'CONTACT_INFO' : 'Send me an email: ilyes.bouchada@gmail.com  Or follow me on SNS',
      'LANGUAGE_1' : 'JP',
      'LANGUAGE_2' : 'FR',
      'LANGUAGE_3' : 'AR',
    });
   
    $translateProvider.translations('JP', {
      'HOME' : 'ホーム',
      'ABOUT' : '自己紹介',
      'PORTFOLIO' : 'ポートフォリオ',
      'CONTACT' : '連絡',
      'WELCOME' : 'ようこそ',
      'ABOUT_MORE' : 'よ!　私はイリャスと申します。電気通信大学の学生と、MeanSquared社のソフトウェアエンジニアをしています。...つづく',
      'PORTFOLIO_MORE' : 'これは以前作ったプロジェクトになっています。',
      'CONTACT_INFO' : 'ilyes.bouchada@gmail.comへメールを送ってください。またはSNSでフォローしてください。',
      'LANGUAGE_1' : 'EN',
      'LANGUAGE_2' : 'FR',
      'LANGUAGE_3' : 'AR',
    });

    $translateProvider.translations('FR', {
      'HOME' : 'Home',
      'ABOUT' : 'About',
      'PORTFOLIO' : 'Portfolio',
      'CONTACT' : 'Contact',
      'WELCOME' : 'Welcome',
      'ABOUT_MORE' : 'Hi! I am Ilyes Bouchada, a student at Tokyo University of Electro-Communication. I work as a part-time software engineer and system adiministrator at MeanSquared Inc. ...To be continued',
      'PORTFOLIO_MORE' : 'Here are some Projects I worked on..',
      'CONTACT_INFO' : 'Send me an email: ilyes.bouchada@gmail.com  Or follow me on SNS',
      'LANGUAGE_1' : 'JP',
      'LANGUAGE_2' : 'EN',
      'LANGUAGE_3' : 'AR',
    });

    $translateProvider.translations('AR', {
      'HOME' : 'Home',
      'ABOUT' : 'About',
      'PORTFOLIO' : 'Portfolio',
      'CONTACT' : 'Contact',
      'WELCOME' : 'Welcome',
      'ABOUT_MORE' : 'Hi! I am Ilyes Bouchada, a student at Tokyo University of Electro-Communication. I work as a part-time software engineer and system adiministrator at MeanSquared Inc. ...To be continued',
      'PORTFOLIO_MORE' : 'Here are some Projects I worked on..',
      'CONTACT_INFO' : 'Send me an email: ilyes.bouchada@gmail.com  Or follow me on SNS',
      'CONTACT_INFO' : 'Info',
      'LANGUAGE_1' : 'JP',
      'LANGUAGE_2' : 'FR',
      'LANGUAGE_3' : 'EN',
    });
   
    $translateProvider.preferredLanguage('EN');
    
  }]);

  app.controller('frontCtrl', function ($scope, $translate) {
    $scope.lang = $translate.use();
    $scope.changeLanguage = function($event){
        $translate.use($event.target.innerText);
        $scope.lang = $translate.use();
      }
  });
  