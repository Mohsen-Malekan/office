import angular from 'angular';

export class DocumentInfoEditorController {
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.doc = angular.copy(this.document);
  }

  saveInfo(doc) {
    let patch = [];
    if(doc.name !== this.document.name) {
      patch.push({
        op    : 'replace',
        path  : '/name',
        value : doc.name
      });
    }
    if(doc.description !== this.document.description) {
      patch.push({
        op    : 'replace',
        path  : '/description',
        value : doc.description
      });
    }
    if(patch.length) {
      this.isSaving     = true;
      this.doc.editedAt = Date.now();
      patch.push({
        op    : 'replace',
        path  : '/editedAt',
        value : this.doc.editedAt
      });
      return this._patch(doc._id, patch)
        .then(() => console.log('با موفقیت انجام شد'))
        .finally(() => (this.isSaving = false));
    }
  }

  _hasChanged(doc) {
    return doc.name !== this.document.name
      || doc.description !== this.document.description;
  }

  _patch(id, patch) {
    return this.$http.patch(`api/documents/${id}`, patch)
      .then(() => {
        this.document.name        = this.doc.name;
        this.document.description = this.doc.description;
        this.document.editedAt    = this.doc.editedAt;
      });
  }
}

export default angular.module('officeApp.document.details.infoEditor', [])
  .component('documentInfoEditor', {
    template     : require('./document-info-editor.html'),
    controller   : DocumentInfoEditorController,
    controllerAs : 'vm',
    bindings     : {
      document : '='
    }
  })
  .name;
