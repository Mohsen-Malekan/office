import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './document.routes';

import {DocumentResource} from './document.service';
import documentList from './document-list/document-list.component';
import documentSingle from './document-single/document-single.component';
import documentDetails from './document-details/document-details.component';

export default angular.module('officeApp.document',
  [
    uiRouter, documentList, documentSingle, documentDetails
  ])
  .config(routing)
  .factory('Document', DocumentResource)
  .name;
