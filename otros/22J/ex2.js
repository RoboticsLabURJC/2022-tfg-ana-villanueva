var sceneEl = document.querySelector('a-scene');

console.log(sceneEl.querySelector('#redBox'));

AFRAME.registerComponent('foo', {
    init: function () {
      console.log(this.el.sceneEl);  // Reference to the scene element.
    }
  });