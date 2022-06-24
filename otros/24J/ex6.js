// Registering component in foo-component.js
AFRAME.registerComponent('blood', {
    schema: {
        blood_type: {type: "string", default:"O-type"},
        oxygen_level: {type: "string", default:"normal"},
    },
     //
    init: function () {
        console.log(this.data.blood_type + this.data.oxygen_level)
    }
});