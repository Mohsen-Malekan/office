'use strict';
import * as _ from 'lodash';

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
      authenticate : true,
      component    : 'documentList',
      resolve      : {
        /*@ngInject*/
        documents(Document) {
          return Document.query();
        }
      }
    })
    .state('document.list.details', {
      url   : '/:id',
      views : {
        '@document' : {
          component : 'documentDetails',
        }
      },
      authenticate : true,
      resolve      : {
        /*@ngInject*/
        document(documents, $transition$) {
          return documents.$promise
            .then(docs => _.find(docs, doc => doc._id === $transition$.params().id));
        }
      }
    });
}
