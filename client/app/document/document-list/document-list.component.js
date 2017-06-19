import angular from 'angular';

export class DocumentListController {
  remove(document) {
    document.$remove();
    this.documents.splice(this.documents.indexOf(document), 1);
  }
}

export default angular.module('officeApp.document.list', [])
  .component('documentList', {
    template     : require('./document-list.html'),
    controller   : DocumentListController,
    controllerAs : 'listCtrl',
    bindings     : {
      documents : '='
    }
  })
  .name;
