'use strict';

export default function routes ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('project', {
      url      : '/project',
      abstract : true,
      template : '<ui-view></ui-view>'
    })
    .state('project.list', {
      url          : '/list',
      component    : 'projectList',
      authenticate : true,
      resolve      : {
        /*@ngInject*/
        projects($http){
          // return $http.get('api/projects').then(res => res.data);
          return $http.get('app/project/projects.json').then(res => res.data);
        }
      }
    });
}
