//Evitar script se ejecute antes de que la escena este cargada
window.addEventListener('load', initScene)

//Objeto que contiene las posiciones de los meteoritos
const meteors = [
    { x: 0, y: 0, z: -30 },
    { x: 0, y: 0, z: 30 },
    { x: 30, y: 0, z: 0 },
    { x: -30, y: 0, z: 0 },
    { x: 20, y: 0, z: 20 },
    { x: 20, y: 0, z: -20 },
    { x: -20, y: 0, z: -20 },
    { x: -20, y: 0, z: 20 }
]
let meteor, score = 0

function initScene() {
    //Obtención de las orbitas del HTML
    let orbits = document.querySelectorAll('.orbit')
    
    //Para cada una de las esferas crearemos juego de meteoritos
    orbits.forEach(orbit => {
        //pos = posicion
        meteors.forEach(pos => {
            
            //Creación del meteorito
            meteor = document.createElement('a-entity')
            meteor.setAttribute('geometry', { primitive: 'sphere', radius: Math.random() * 3 + 0.5 })
            meteor.setAttribute('material', { shader: 'flat', src: 'https://raw.githubusercontent.com/RoboticsLabURJC/2022-tfg-ana-villanueva/main/otros/08/text1.jpg' })
            meteor.setAttribute('shootable', '')
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
            this.el.parentNode.removeChild(this.el)
            //console.log("cazado")
            document.querySelector('[text]').setAttribute('value', `${++score} meteoritos cazados`)
        })
    }
})