'use strict';

const settings = require('./settings');
const data = require('./data');
const ssr_manifest = require('./ssr_manifest');
const reloader = require('./reloader');
const initialization = require('./initialization');
// const components = require('./components');
const controllerhelper = require('./controllerhelper');

module.exports = {
  settings,
  data,
  generateDetailManifests: settings.generateDetailManifests,
  findMatchingRoute: settings.findMatchingRoute,
  getParameterized: settings.getParameterized,
  ssr_manifest,
  reloader,
  initialization,
  // components,
  getSettings: settings.getSettings,
  reactapp: settings.reactapp,
  controllerhelper,
};