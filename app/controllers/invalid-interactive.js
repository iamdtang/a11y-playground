import Controller from '@ember/controller';

export default class NoInvalidInteractiveController extends Controller {
  doSomething() {
    alert('Hi!');
  }
}
