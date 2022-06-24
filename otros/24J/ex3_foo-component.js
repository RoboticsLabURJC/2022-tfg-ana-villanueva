// Registering component in foo-component.js
AFRAME.registerComponent('foo', {
    schema: {},
    init: function () {},
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });

  AFRAME.registerComponent('bar', {
    schema: {
      color: {default: '#FFF'},
      size: {type: 'int', default: 5}
    }
  });