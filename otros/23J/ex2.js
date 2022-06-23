//Evitar script se ejecute antes de que la escena este cargada
window.addEventListener('load', initScene)

//Objeto que contiene las posiciones de los meteoritos
const meteoritos = [
    { x: 0, y: 3, z: -30 },
    { x: 0, y: -3, z: -30 },
    { x: -3, y: 0, z: -30 },
    { x: 3, y: 0, z: -30 }
]


let meteorito


function initScene() {
    //Obtención de las orbitas del HTML
    let orbitas = document.querySelectorAll('.orbit')
    
    //Para cada una de las esferas crearemos juego de meteoritos
    orbitas.forEach(orbita => {
        //pos = posicion
        meteoritos.forEach(pos => {
            
            //Creación del meteorito
            meteorito = document.createElement('a-entity')
            meteorito.setAttribute('geometry', { primitive: 'sphere', radius: 2 })
            //meteorito.setAttribute('material', { color: 'red' })
            //meteorito.setAttribute('class', 'meteorito') //No parece ser necesario que class="meteorito"
            meteorito.object3D.position.set(pos.x, pos.y, pos.z)

            if (pos.x == 3 || pos.x == -3){
                meteorito.setAttribute('material', { color: 'red' })
            }else{
                meteorito.setAttribute('material', { color: 'blue' })
            }

            orbita.appendChild(meteorito)
        }) 
    })

}
