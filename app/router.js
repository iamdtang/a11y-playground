import EmberRouter from '@ember/routing/router';
import config from 'a11y/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('valid-alt-text');
  this.route('buttons-out-of-anchors-part-1');
  this.route('buttons-out-of-anchors-part-2');
  this.route('invalid-interactive');
  this.route('invalid-link-text');
  this.route('input-labels');
  this.route('positive-tabindexes');
  this.route('css-outlines');
  this.route('landmarks', { path: 'form-landmarks' });
});
