import angular from 'angular';
import modal from '../../../components/modal/modal.service';

export class DocumentSingleController {
  /*@ngInject*/
  constructor(Document, Modal) {
    this.Document = Document;
    this.Modal    = Modal;
  }

  remove(document) {
    this.Modal.confirm()
      .then(() => {
        return this.parent.remove(document);
      });
  }
}

export default angular.module('officeApp.document.single', [modal])
  .component('documentSingle', {
    template     : require('./document-single.html'),
    controller   : DocumentSingleController,
    controllerAs : 'vm',
    require      : {
      parent : '^^documentList'
    },
    bindings     : {
      document : '='
    }
  })
  .name;
