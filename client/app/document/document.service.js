'use strict';

export function DocumentResource($resource) {
  'ngInject';

  return $resource('/api/documents/:id/', {
    id : '@_id'
  }, {
    get : {
      method : 'GET'
    }
  });
}
