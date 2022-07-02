//Evitar script se ejecute antes de que la escena este cargada
window.addEventListener('load', initScene)

//Objeto que contiene las posiciones de los meteoritos
const meteors = [
    { x: 0, y: 10, z: -30 }
]
let meteor

const backgroundA = 'https://raw.githubusercontent.com/RoboticsLabURJC/2022-tfg-ana-villanueva/main/otros/20J/papelA.png';
const backgroundB = 'https://raw.githubusercontent.com/RoboticsLabURJC/2022-tfg-ana-villanueva/main/otros/20J/papelB.jpg';



function initScene() {
    //Obtención de las orbitas del HTML
    let orbits = document.querySelectorAll('.orbit')
    
    //Para cada una de las esferas crearemos juego de meteoritos
    orbits.forEach(orbit => {
        //pos = posicion
        meteors.forEach(pos => {
            
            //Creación del meteorito
            meteor = document.createElement('a-entity')
            meteor.setAttribute('geometry', { primitive: 'sphere', radius: 6 })
            meteor.setAttribute('material', { shader: 'flat', src: backgroundA })
            meteor.setAttribute('shootable', '')
            meteor.setAttribute('class', 'meteor')
            meteor.object3D.position.set(pos.x, pos.y, pos.z)

            orbit.appendChild(meteor)
        }) 
    })
}

//Registro de componente propio
AFRAME.registerComponent('shootable', {

    init: function () {
        //acceso a la entidad que compone al componente -- 
        //cuando hagan click

        this.el.addEventListener('click', () => {
            meteor.setAttribute('material', { shader: 'flat', src: backgroundB })
        })
    }
})
