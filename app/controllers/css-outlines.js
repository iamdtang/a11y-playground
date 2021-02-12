import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CssOutlinesController extends Controller {
  @tracked selected = 'disable-outline';

  get isOutlineDisabled() {
    return this.selected === 'disable-outline';
  }

  get hasBorderForFocusState() {
    return this.selected === 'border-for-focus';
  }

  @action
  setOption(event) {
    console.log(event);
    this.selected = event.target.value;
  }
}
