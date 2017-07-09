import angular from 'angular';
import 'rangy/lib/rangy-core';
import 'rangy/lib/rangy-selectionsaverestore';
import 'textangular/dist/textAngular-sanitize.min';
import 'textangular/dist/textAngular.css';
import textAngular from 'textangular/dist/textAngular.min';
import documentContent from './document-content.directive';
import documentInfoEditor from '../document-info-editor/document-info-editor.component';

export class DocumentDetailsController {
  parts = [];

//  /*@ngInject*/
//  constructor($http) {
//    this.$http = $http;
//  }

  addText() {
    let part = {
      content : '',
      editing : false
    };
    this.parts.push(part);
//    this.document.html = this.document.html.concat('<div text-angular ng-model="vm.parts[vm.parts.length - 1].model"></div>');
  }
}

export default angular.module('officeApp.document.details', [documentInfoEditor, textAngular])
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
