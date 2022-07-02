// Registering component in foo-component.js
AFRAME.registerComponent('blood', {
    schema: {
        blood_type: {type: "string", default:"O-type"},
        oxygen_level: {type: "string", default:"normal"},
    },
     //
    init: function () {
        //mala praxis -> this.data.blood_type = 'red'
        console.log(this.data.blood_type + this.data.oxygen_level)  
        console.log(this.el) 
        let Julian = document.querySelector('#Julian')
        console.log(Julian)

        this.el.addEventListener('click', function(){
            console.log("Hello there")
        });
    },
});