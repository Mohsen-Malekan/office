'use strict';

export function routerDecorator($state, Auth, $transitions) {
  'ngInject';
  // Redirect to login if route requires auth and the user is not logged in, or doesn't have required role

  $transitions.onStart({}, trans => {
    let next = trans.to();

    if(!next.authenticate) {
      return true;
    }

    if(typeof next.authenticate === 'string') {
      return Auth.hasRole(next.authenticate)
        .then(has => {
          if(has) {
            return true;
          }
          return Auth.isLoggedIn()
            .then(is => $state.go(is ? 'main' : 'login'));
        });
    } else {
      return Auth.isLoggedIn()
        .then(is => {
          if(is) {
            return true;
          }
          return $state.target('login');
        });
    }
  });
}
