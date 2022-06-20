//Evitar script se ejecute antes de que la escena este cargada
window.addEventListener('load', initScene)

//Objeto que contiene las posiciones de los meteoritos
const meteors = [
    { x: 0, y: 0, z: -30 }
]
let meteor

const background = 'https://raw.githubusercontent.com/anavillanuevaurjc/LTAW-Practicas/main/P4/public/flores.jpg';

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
            meteor.setAttribute('material', { shader: 'flat', src: background })
            meteor.setAttribute('class', 'meteor')
            meteor.object3D.position.set(pos.x, pos.y, pos.z)

            orbit.appendChild(meteor)
        }) 
    })
}

