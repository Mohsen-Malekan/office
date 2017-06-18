'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';

import uiRouter from 'angular-ui-router';
// import uiBootstrap from 'angular-ui-bootstrap';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import main from './main/main.component';
import project from './project/project.module';

import './app.css';

angular.module('officeApp', [ngCookies, ngResource, uiRouter, _Auth,
  account, admin, navbar, constants, util, main, project
])
  .config(routeConfig)
  .run(function ($transitions, $state) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $transitions.onStart({}, trans => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;

      let auth = trans.injector().get('Auth');
      auth.isLoggedIn(loggedIn => {
        if (trans.to().authenticate && !loggedIn) {
          return $state.go('login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['officeApp'], {
      strictDi : true
    });
  });
