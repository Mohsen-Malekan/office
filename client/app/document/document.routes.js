'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider
    .state('document', {
      url      : '/document',
      abstract : true,
      template : '<ui-view></ui-view>'
    })
    .state('document.list', {
      url          : '/list',
      component    : 'documentList',
      authenticate : true,
      resolve      : {
        /*@ngInject*/
        documents(Document) {
          return Document.query();
        }
      }
    });
}
