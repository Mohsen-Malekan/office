import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './document.routes';

import {DocumentResource} from './document.service';
import documentList from './document-list/document-list.component';
import documentView from './document-single/document-single.component';

export default angular.module('officeApp.document', [uiRouter, documentList, documentView])
  .config(routing)
  .factory('Document', DocumentResource)
  .name;
