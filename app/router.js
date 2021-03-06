import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('watchlist');
  this.route('faq');
  this.route('results', {path: '/results/:location/:language'});
  this.route('fullcontact', {path: '/fullcontact/:email'});
});

export default Router;
