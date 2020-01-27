import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals');
  this.route('plaatsen');
  this.route('apo_kayan_plateau-list');
  this.route('zuid_papua-list');
  this.route('mendalam_rivier-list');
  this.route('mahakam_rivier-list');
});

export default Router;

