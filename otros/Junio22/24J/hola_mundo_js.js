//Evitar script se ejecute antes de que la escena este cargada
window.addEventListener('load', initScene)

const positions = [
    { x: -1, y: 0.5, z: -3 },
    { x: 0, y: 1.25, z: -5 },
    { x: 1, y: 0.75, z: -3 },
    { x: 0, y: 0, z: -4 }
]

let position

function initScene() {
    //Obtención del HTML
    let componentes = document.querySelectorAll('#componente')
    
    componentes.forEach(componente => {
        //pos = posicion
        positions.forEach(pos => {
            
            //Creación 
            position = document.createElement('a-entity')
            position.object3D.position.set(pos.x, pos.y, pos.z)

            if (pos.x == -1){
                //rotation:"0 45 0"
                position.setAttribute('geometry', { primitive: 'box'})
                position.setAttribute('rotation', { x:0, y:45, z:0})
                position.setAttribute('material', { color: '#4CC3D9' })
            }else if (pos.x == 0 && pos.y == 1.25){
                position.setAttribute('geometry', { primitive: 'sphere', radius: 1.25 })
                position.setAttribute('material', { color: '#EF2D5E' })

            }else if (pos.x == 1){
                position.setAttribute('geometry', { primitive: 'cylinder', radius: 0.5, height:'1.5' })
                position.setAttribute('material', { color: '#FFC65D' })
            }else if (pos.x == 0 && pos.y == 0) {
                position.setAttribute('geometry', { primitive: 'plane', width:'4', height:'4' })
                position.setAttribute('rotation', { x:-90, y:0, z:0})
                position.setAttribute('material', { color: '#7BC8A4' })
            }else{
                position.setAttribute('geometry', { primitive: 'sky'})
                position.setAttribute('material', { color: '#ECECEC' })
            }

            componente.appendChild(position)
        }) 
    })

}