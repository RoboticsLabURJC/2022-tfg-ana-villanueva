// Registering component in foo-component.js
AFRAME.registerComponent('blood', {
    schema: {type: "string", default:"O-type"}, //
    init: function () {
        console.log(this.data)
    }
});