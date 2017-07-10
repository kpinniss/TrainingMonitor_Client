import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import uiBootstrap from 'angular-bootstrap-npm';
import {DashboardController, DayController, LessonController} from './controllers/controllers';
import {DashboardService} from './services/services';

   var app = angular.module('CourseBuilder', [uirouter, ngResource, uiBootstrap]);
   app.config(routing);
   app.service("$dashService",DashboardService);

    routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function routing($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
          .state('dash', {
            url: '/',
            templateUrl: '/ngApp/views/home/dash.html',
            controller: DashboardController,
            controllerAs: 'vm'
          })
          //week states
           .state('weeks', {
            url: '/weeks/',
            templateUrl: '/ngApp/views/weeks.html',
            controller: WeekController,
            controllerAs: 'vm'
          })

          //day states
          .state('days', {
            url: '/days/:id',
            templateUrl: '/ngApp/views/days/days.html',
            controller: DayController,
            controllerAs: 'vm'
          })
           .state('addDay', {
            url: '/addDay',
            templateUrl: '/ngApp/views/addDay.html',
            controller: DayController,
            controllerAs: 'vm'
          })
           .state('editDay', {
            url: '/editDay/:id',
            templateUrl: '/ngApp/views/editDay.html',
            controller: EditDayController,
            controllerAs: 'vm'
          })
           .state('removeDay', {
            url: '/removeDay/:id',
            templateUrl: '/ngApp/views/removeDay.html',
            controller: DayController,
            controllerAs: 'vm'
          })

          //Lesson States
           .state('lessons', {
            url: '/lessons/:id',
            templateUrl: '/ngApp/views/lesson.html',
            controller: LessonController,
            controllerAs: 'vm'
          })
          .state('addLesson', {
            url: '/addLesson/',
            templateUrl: '/ngApp/views/addLesson.html',
            controller: LessonController,
            controllerAs: 'vm'
          })
           .state('editLesson', {
            url: '/editLesson/:id',
            templateUrl: '/ngApp/views/editLesson.html',
            controller: EditLessonController,
            controllerAs: 'vm'
          })
          .state('removeLesson', {
            url: '/removeLesson/:id',
            templateUrl: '/ngApp/views/removeLesson.html',
            controller: EditLessonController,
            controllerAs: 'vm'
          })
          .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
          });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    }
