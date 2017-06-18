import angular from 'angular';

export class ProjectListController {
  /*@ngInject*/
  constructor () {
  }
}

export default angular.module('officeApp.project.list', [])
  .component('projectList', {
    template     : require('./project-list.html'),
    controller   : ProjectListController,
    controllerAs : 'vm',
    bindings     : {
      projects : '='
    }
  })
  .name;
