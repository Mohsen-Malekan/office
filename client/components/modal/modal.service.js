'use strict';

import angular from 'angular';
import ngDialog from 'ng-dialog';

/*@ngInject*/
export function Modal(ngDialog) {
  function openModal(options) {
    let opt = {
      showClose : false
    };
    return ngDialog.openConfirm(angular.extend(options, opt));
  }

  return {
    confirm() {
      let options = {
        templateUrl : 'components/modal/modal.html'
      };
      return openModal(options);
    }
  };
}

export default angular.module('officeApp.Modal', [ngDialog])
  .factory('Modal', Modal)
  .name;
