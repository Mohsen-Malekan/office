import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './project.routes';

import projectList from './project-list/project-list.component';

export default angular.module('officeApp.project', [uiRouter, projectList])
  .config(routing)
  .name;
