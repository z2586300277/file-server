import * as THREE from 'three'

export default {

    id: 'wallShaderComponent',

    name: '围墙着色器',

    create() {

        const uTime = { value: 0 }

        const mesh = new THREE.Mesh(

            new THREE.CylinderGeometry(80, 80, 50, 4, 64, true),

            new THREE.ShaderMaterial({

                side: THREE.DoubleSide,

                transparent: true,

                depthTest: true,

                depthWrite: true,

                uniforms: { uTime },

                vertexShader: `
                    varying vec2 vUv;
                    #include <common>
                    #include <logdepthbuf_pars_vertex>
                    void main(){
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
                        #include <logdepthbuf_vertex>
                    }
                `,

                fragmentShader: `
                    uniform float uTime;
                    varying vec2 vUv;
                    #include <common>
                    #include <logdepthbuf_pars_fragment>
                    void main(){
                        vec4 baseColor = vec4(0.0,1.,0.5,1.);
                        float amplitude = 1.;
                        float frequency = 10.;
                        float x = vUv.x;
                        float y = sin(x * frequency);
                        float t = 0.01 * (-uTime * 130.0);
                        y += sin(x * frequency * 2.1 + t) * 4.5;
                        y += sin(x * frequency * 1.72 + t * 1.121) * 4.0;
                        y += sin(x * frequency * 2.221 + t * 0.437) * 5.0;
                        y += sin(x * frequency * 3.1122 + t * 4.269) * 2.5;
                        y *= amplitude * 0.06;
                        y /= 3.;
                        y += 0.55;
                        baseColor.a = step(vUv.y, y) * (y - vUv.y) / y;
                        if (baseColor.a < 0.01) discard;
                        gl_FragColor = baseColor;
                        #include <logdepthbuf_fragment>
                    }
                `

            })

        )

        mesh.position.y = 25

        mesh.onBeforeRender = () => { uTime.value = performance.now() / 1000 }

        return mesh

    }

}
