'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('main', {
    url          : '/',
    component    : 'main',
    authenticate : true
  });
}
