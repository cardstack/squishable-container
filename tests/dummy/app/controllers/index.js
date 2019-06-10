import Controller from '@ember/controller';
import { animate, Promise } from 'liquid-fire';

export default Controller.extend({
  actions: {
    toggleSidebar() {
      this.set('showSidebar', !this.get('showSidebar'));
    }
  },
  animateWidth
});

function animateWidth() {
  let promises = [];
  if (this.newElement) {
    let width = this.newElement.width();
    this.newElement.css('display', 'none');
    promises.push(
      animate(this.newElement, { display: '', width: [ width, 0] }).then(() => {
        this.newElement.css('width', '');
      })
    );
  }
  if (this.oldElement) {
    promises.push(animate(this.oldElement, { width: 0 }));
  }
  return Promise.all(promises);
}
