/*global THREE*/
/*global AFRAME*/
// Created 11/10/2020 - Patrick Pineda

AFRAME.registerComponent("mirror", {
    schema: {
      interval: { type: "number", default: 60 },
      autoRefresh: { type: "boolean", default: true },
      resolution: { type: "number", default: 64 },
    },
  
    init() {
      
      this.count = 0;
      this.activeCamera = false;
      this.mesh = null;
  
      this.scene = this.el.sceneEl.object3D;
      this.renderer = this.el.sceneEl.renderer;
  
      this.getModel = this.getModel.bind(this);
      this.refresh = this.refresh.bind(this);
      //let mesh = this.el.getObject3D("mesh");
      
      let renderTargetSettings = {
        format: THREE.RGBFormat,
        generateMipmaps: false,
        minFilter: THREE.NearestFilter,
        encoding: THREE.sRGBEncoding
      }
  
      this.cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget(this.data.resolution, renderTargetSettings);
  
      this.cubeRenderTarget2 = new THREE.WebGLCubeRenderTarget(this.data.resolution, renderTargetSettings);
  
      this.cubeCamera1 = new THREE.CubeCamera(1, 1000, this.cubeRenderTarget1);
      this.cubeCamera2 = new THREE.CubeCamera(1, 1000, this.cubeRenderTarget2);
  
      this.el.setObject3D("cubecamera1", this.cubeCamera1);
      this.el.setObject3D("cubecamera2", this.cubeCamera2);
  
      this.material = new THREE.MeshBasicMaterial({
        envMap: this.cubeRenderTarget2.texture,
        combine: THREE.MultiplyOperation,
        reflectivity: 1
      });
    },
  
    getModel() {
      let mesh = this.el.getObject3D("mesh");
      if (!mesh) return;
      let material = this.material;
  
      mesh.traverse(node => {
        if (node && node.material) {
          node.material = material;
        }
      });
  
      this.mesh = mesh;
      this.refresh();
      return;
    },
  
    refresh() {
      
      this.activeCamera = !this.activeCamera;
      if (this.activeCamera == true) {
        this.cubeCamera1.update(this.renderer, this.scene);
        this.material.envMap = this.cubeRenderTarget1.texture;
      } else {
        
        this.cubeCamera2.update(this.renderer, this.scene);
        this.material.envMap = this.cubeRenderTarget2.texture;
      }
    },
  
    tick(t, dt) {
      if (this.mesh == null) {
        this.getModel();
        return;
      }
  
      this.count += dt;
      if (this.count < this.data.interval) return;
      this.count = 0;
      
      if (this.data.autoRefresh == true) this.refresh();
    }
  });
  