import angular from 'angular';

export class ProjectListController {
  /*@ngInject*/
  constructor ($http) {
    this.$http = $http;
  }

  delete(project){
    return this.$http.delete(`api/projects/${project._id}`)
      .then(()=>{
        console.log('>>> deleted: ', project);
      });
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
