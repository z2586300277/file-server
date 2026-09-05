import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { mergeAttributes } from 'three/addons/utils/BufferGeometryUtils.js'

const HOST = 'https://z2586300277.github.io/3d-file-server/'

class MeshEdgesGeometry extends THREE.BufferGeometry {

    constructor(object, thresholdAngle = 1) {

        super()

        object.updateWorldMatrix(true, true)

        this.setAttribute('position', this.extractEdges(object, thresholdAngle))

    }

    extractEdges(object, thresholdAngle) {

        const attributes = []

        object.traverse(child => {

            if (child.geometry) {

                const geo = new THREE.EdgesGeometry(child.geometry, thresholdAngle)

                attributes.push(geo.getAttribute('position').applyMatrix4(child.matrixWorld))

            }

        })

        if (!attributes.length) throw 'MeshEdgesGeometry: No edges found'

        return mergeAttributes(attributes)

    }

}

export default {

    id: 'meshEdges',

    name: '模型线框',

    async create() {

        const loader = new GLTFLoader()

        loader.setDRACOLoader(new DRACOLoader().setDecoderPath(HOST + 'js/three/draco/'))

        const gltf = await loader.loadAsync(HOST + 'files/model/elegant.glb')

        return new THREE.LineSegments(new MeshEdgesGeometry(gltf.scene), new THREE.LineBasicMaterial({ color: 'pink' }))

    }

}
