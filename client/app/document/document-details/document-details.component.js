import angular from 'angular';
import documentContent from './document-content.directive';
import documentInfoEditor from '../document-info-editor/document-info-editor.component';

export class DocumentDetailsController {
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  newElement(type) {
    this.document.html = this.document.html.concat('<p>Mohsen</p>');
  }
}

export default angular.module('officeApp.document.details', [documentInfoEditor])
  .component('documentDetails', {
    template     : require('./document-details.html'),
    controller   : DocumentDetailsController,
    controllerAs : 'vm',
    bindings     : {
      document : '='
    }
  })
  .directive('documentContent', documentContent)
  .name;
