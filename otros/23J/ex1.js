const entityEl = document.querySelector('a-entity').object3D;  // THREE.Group

console.log(entityEl.object3DMap + "prueba");

entityEl.getObject3D('mesh');  // THREE.Mesh
entityEl.getObject3D('light');  // THREE.Light